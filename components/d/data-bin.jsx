import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gvvss987d.css';
import '../../css/p/p5oy8duvh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gvvss987d"/><path class="p5oy8duvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:data-bin"} {...others} />);
}

export default Component;
