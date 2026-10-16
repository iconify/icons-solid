import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/twlufw5gg.css';
import '../../css/w/wr4720bes.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="twlufw5gg"/><path class="wr4720bes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:delivery-robot-48-bold"} {...others} />);
}

export default Component;
