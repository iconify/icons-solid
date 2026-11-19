import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wz_o02bll.css';
import '../../css/y/yf_loftht.css';
import '../../css/t/tapbwlbjz.css';
import '../../css/u/umxtdnb8i.css';
import '../../css/u/u7o800b5y.css';
import '../../css/r/rr9flbjju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wz_o02bll"/><circle class="yf_loftht"/><circle class="tapbwlbjz"/><path class="umxtdnb8i"/><path class="u7o800b5y"/><path clip-rule="evenodd" class="rr9flbjju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:restore-controls"} {...others} />);
}

export default Component;
