import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zq6pc5b8w.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zq6pc5b8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:hexagon-vertical-outline"} {...others} />);
}

export default Component;
