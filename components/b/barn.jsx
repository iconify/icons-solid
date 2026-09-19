import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhr-rwbyo.css';
import '../../css/d/d3xearisc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rhr-rwbyo"/><path class="d3xearisc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:barn"} {...others} />);
}

export default Component;
