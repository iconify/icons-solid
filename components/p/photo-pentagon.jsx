import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tpglke3oj.css';
import '../../css/z/zztr2aboi.css';
import '../../css/y/yvm4rmb-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tpglke3oj"/><path class="zztr2aboi"/><path class="yvm4rmb-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:photo-pentagon"} {...others} />);
}

export default Component;
