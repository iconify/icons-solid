import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pa2owbcbt.css';
import '../../css/n/ns1bq-7jt.css';
import '../../css/w/wvxwsc-vy.css';
import '../../css/w/wmrvracjj.css';
import '../../css/o/o-rgkfgpj.css';
import '../../css/z/zt1e34j_a.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pa2owbcbt"/><path class="ns1bq-7jt"/><path clip-rule="evenodd" class="wvxwsc-vy"/><path clip-rule="evenodd" class="wmrvracjj"/><path class="o-rgkfgpj"/><path clip-rule="evenodd" class="zt1e34j_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:laugh-squint-outline"} {...others} />);
}

export default Component;
