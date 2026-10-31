import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/gtnwvtbqj.css';
import '../../css/q/qyz3c_bqy.css';
import '../../css/r/rk2r9-bbi.css';
import '../../css/q/qtdkd5bib.css';
import '../../css/z/z5nhwrbnt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="gtnwvtbqj wm-shadow"/><path class="qyz3c_bqy wm-shadow"/><path class="rk2r9-bbi"/><path class="qtdkd5bib"/><path class="z5nhwrbnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:wand"} {...others} />);
}

export default Component;
