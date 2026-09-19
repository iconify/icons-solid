import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kol2iac3m.css';
import '../../css/t/t1zao4rim.css';
import '../../css/c/co2mcmbal.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="kol2iac3m"/><path class="t1zao4rim"/><path class="co2mcmbal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:coordinate-02"} {...others} />);
}

export default Component;
