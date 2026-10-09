import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_lg07b5j.css';
import '../../css/m/mq-hp4bft.css';
import '../../css/j/jw7uenmxd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i_lg07b5j"/><path class="mq-hp4bft"/><path class="jw7uenmxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cupcake-48"} {...others} />);
}

export default Component;
