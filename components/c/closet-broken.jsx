import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/genc22bnp.css';
import '../../css/s/se661k0zm.css';
import '../../css/x/xwas84ixu.css';
import '../../css/q/qcvot5b5m.css';
import '../../css/y/ygsbxnbgt.css';
import '../../css/l/lruok7bvl.css';
import '../../css/a/a61wxkb_y.css';
import '../../css/e/eukpbibyf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="genc22bnp"/><path class="se661k0zm"/><path class="xwas84ixu"/><path class="qcvot5b5m"/><path class="ygsbxnbgt"/><path class="lruok7bvl"/><path class="a61wxkb_y"/><path class="eukpbibyf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:closet-broken"} {...others} />);
}

export default Component;
