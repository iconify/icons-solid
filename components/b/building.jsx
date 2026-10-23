import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/wmc_e8brh.css';
import '../../css/z/zxz-okbrh.css';
import '../../css/y/yl_4ogbpd.css';
import '../../css/m/mexfcmb1m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="wmc_e8brh"/><path class="zxz-okbrh"/><path class="yl_4ogbpd"/><path class="mexfcmb1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:building"} {...others} />);
}

export default Component;
