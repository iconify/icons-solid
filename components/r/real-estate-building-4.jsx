import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylvg4v1fy.css';
import '../../css/h/hsx1pzxph.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ylvg4v1fy"/><path class="hsx1pzxph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:real-estate-building-4"} {...others} />);
}

export default Component;
