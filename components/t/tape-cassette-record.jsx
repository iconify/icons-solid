import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wckqyac5z.css';
import '../../css/v/vqc_nlbrx.css';
import '../../css/a/a0prsobyx.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="wckqyac5z"/><path class="vqc_nlbrx"/><path class="a0prsobyx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:tape-cassette-record"} {...others} />);
}

export default Component;
