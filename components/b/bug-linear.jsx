import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/efmll2b9w.css';
import '../../css/b/b1-zrccxf.css';
import '../../css/v/v2njeqw1d.css';
import '../../css/p/p44zvobxz.css';
import '../../css/c/cboq8pb9w.css';
import '../../css/x/xzgidrpom.css';
import '../../css/l/l7e1lbchd.css';
import '../../css/c/cyqn4h1zs.css';
import '../../css/w/wvgv4aclx.css';
import '../../css/a/a-4dztb1w.css';
import '../../css/k/kov4zacea.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="efmll2b9w"/><path class="b1-zrccxf"/><path class="v2njeqw1d"/><path class="p44zvobxz"/><path class="cboq8pb9w"/><path class="xzgidrpom"/><path class="l7e1lbchd"/><path class="cyqn4h1zs"/><path class="wvgv4aclx"/><path class="a-4dztb1w"/><path class="kov4zacea"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bug-linear"} {...others} />);
}

export default Component;
