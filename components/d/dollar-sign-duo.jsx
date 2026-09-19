import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdf80gtnr.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="zdf80gtnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:dollar-sign-duo"} {...others} />);
}

export default Component;
