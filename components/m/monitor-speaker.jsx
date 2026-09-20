import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yc2e94s8x.css';
import '../../css/k/koc_erasu.css';
import '../../css/p/pr_sh2lqz.css';
import '../../css/u/uxwj_xb5y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yc2e94s8x"/><rect class="koc_erasu"/><path class="pr_sh2lqz"/><circle class="uxwj_xb5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:monitor-speaker"} {...others} />);
}

export default Component;
