import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0ty2nbqh.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="d0ty2nbqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:signature-bold"} {...others} />);
}

export default Component;
