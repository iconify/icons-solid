import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/grvmhoowa.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="grvmhoowa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:yield-sign"} {...others} />);
}

export default Component;
