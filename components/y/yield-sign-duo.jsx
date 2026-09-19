import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xb731ubzi.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="xb731ubzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:yield-sign-duo"} {...others} />);
}

export default Component;
