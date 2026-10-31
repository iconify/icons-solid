import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kxlve6byr.css';
import '../../css/a/aimb1-8ps.css';
import '../../css/l/lxsosla-d.css';
import '../../css/s/s_1egdbjk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><g class="kxlve6byr"><circle class="aimb1-8ps"><animate fill="freeze" attributeName="opacity" dur="0.12s" values="0;1"/><animate fill="freeze" attributeName="stroke-dashoffset" calcMode="spline" dur="0.5s" keySplines="0.65 0 0.35 1" keyTimes="0;1" values="20.74;0"/></circle><circle class="lxsosla-d"><animate fill="freeze" attributeName="opacity" dur="0.12s" values="0;1"/><animate fill="freeze" attributeName="stroke-dashoffset" calcMode="spline" dur="0.5s" keySplines="0.65 0 0.35 1" keyTimes="0;1" values="20.74;0"/></circle></g><g opacity=".5"><path class="s_1egdbjk"><animate fill="freeze" attributeName="opacity" dur="0.2s" keyTimes="0;0.4;1" values="0;0;1"/><animate fill="freeze" attributeName="stroke-dashoffset" calcMode="spline" dur="0.58s" keySplines="0 0 1 1;0.65 0 0.35 1" keyTimes="0;0.138;1" values="16.84;16.84;0"/></path></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:integration-draw"} {...others} />);
}

export default Component;
