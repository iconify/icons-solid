import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qy18ibbdz.css';
import '../../css/z/zqm8b10ky.css';
import '../../css/u/ukbom9bgh.css';
import '../../css/q/q3px6mbyf.css';
import '../../css/j/jfn1n2iby.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="qy18ibbdz wm-shadow"/><path class="wm-shadow zqm8b10ky"/><path class="ukbom9bgh"/><path class="q3px6mbyf"/><path class="jfn1n2iby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:paw-print"} {...others} />);
}

export default Component;
