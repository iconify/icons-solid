import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x9wgupd4k.css';
import '../../css/q/qqfwjhbcx.css';
import '../../css/k/kqwt2ibko.css';
import '../../css/c/ct-ivxnan.css';
import '../../css/z/zq2j2dbih.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x9wgupd4k"/><path class="qqfwjhbcx"/><path class="kqwt2ibko"/><path class="ct-ivxnan"/><path class="zq2j2dbih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:layers"} {...others} />);
}

export default Component;
