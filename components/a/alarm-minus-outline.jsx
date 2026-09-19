import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uxk221bvn.css';
import '../../css/n/nwg_owbkv.css';
import '../../css/q/qhej172gu.css';
import '../../css/y/yv_w3obcz.css';
import '../../css/k/kf7wn1ygz.css';
import '../../css/a/akcwkxb7x.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="uxk221bvn"/><path class="nwg_owbkv"/><path clip-rule="evenodd" class="qhej172gu"/><path clip-rule="evenodd" class="yv_w3obcz"/><path class="kf7wn1ygz"/><path clip-rule="evenodd" class="akcwkxb7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:alarm-minus-outline"} {...others} />);
}

export default Component;
