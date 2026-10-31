import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjzqy4bri.css';
import '../../css/s/swsnl4b_n.css';
import '../../css/y/yydc_tcsq.css';
import '../../css/t/tmo38wbpa.css';
import '../../css/e/e38acrb9a.css';
import '../../css/c/cktdxyblz.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="fjzqy4bri"/><path class="swsnl4b_n"/><path class="yydc_tcsq"/><path class="tmo38wbpa"/><path class="e38acrb9a"/><path class="cktdxyblz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:tuna"} {...others} />);
}

export default Component;
