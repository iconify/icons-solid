import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hk21kvbqk.css';
import '../../css/u/ume25pisr.css';
import '../../css/n/n1tzarbax.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hk21kvbqk"/><path class="ume25pisr"/><path class="n1tzarbax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:delete-48-bold"} {...others} />);
}

export default Component;
