import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ywy943asn.css';
import '../../css/n/nn6ax1p1y.css';
import '../../css/d/dvc06ebrn.css';
import '../../css/t/tgg1i8b1y.css';
import '../../css/c/cegvbll_n.css';
import '../../css/x/xlijtjbff.css';
import '../../css/e/e8nlosb2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ywy943asn"/><path class="nn6ax1p1y"/><path class="dvc06ebrn"/><path class="tgg1i8b1y"/><path class="cegvbll_n"/><path class="xlijtjbff"/><path class="e8nlosb2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:pin-x-mark"} {...others} />);
}

export default Component;
