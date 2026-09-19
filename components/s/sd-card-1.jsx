import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvf-sbcvp.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="wvf-sbcvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sd-card-1"} {...others} />);
}

export default Component;
