import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ed4eppq-r.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="ed4eppq-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:center-focus-weak"} {...others} />);
}

export default Component;
