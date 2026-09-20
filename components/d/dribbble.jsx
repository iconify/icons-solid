import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ukyj2jbzb.css';
import '../../css/h/h7c8ghsdn.css';
import '../../css/s/s3o27sbae.css';
import '../../css/q/qwbtdcb_b.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="ukyj2jbzb"/><path clip-rule="evenodd" class="h7c8ghsdn"/><path clip-rule="evenodd" class="s3o27sbae"/><path clip-rule="evenodd" class="qwbtdcb_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:dribbble"} {...others} />);
}

export default Component;
