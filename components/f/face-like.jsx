import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-4h1bclr.css';

const viewBox = {"width":1664,"height":1664};
const content = `<path class="d-4h1bclr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:face-like"} {...others} />);
}

export default Component;
