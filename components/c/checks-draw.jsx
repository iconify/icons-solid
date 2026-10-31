import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ev89f_b-a.css';
import '../../css/w/wdkaabc7u.css';
import '../../css/j/jbr0jgb4g.css';
import '../../css/t/t_r-15p8k.css';
import '../../css/b/bo8dc4bej.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><line x1="10.88" x2="20.96" y1="5.28" y2="5.28" class="ev89f_b-a"><animate fill="freeze" attributeName="opacity" dur="0.12s" values="0;1"/><animate fill="freeze" attributeName="stroke-dashoffset" calcMode="spline" dur="0.5s" keySplines="0.65 0 0.35 1" keyTimes="0;1" values="10.08;0"/></line><line x1="10.88" x2="20.96" y1="12" y2="12" class="ev89f_b-a"><animate fill="freeze" attributeName="opacity" dur="0.12s" values="0;1"/><animate fill="freeze" attributeName="stroke-dashoffset" calcMode="spline" dur="0.5s" keySplines="0.65 0 0.35 1" keyTimes="0;1" values="10.08;0"/></line><line x1="10.88" x2="17.6" y1="18.72" y2="18.72" class="wdkaabc7u"><animate fill="freeze" attributeName="opacity" dur="0.12s" values="0;1"/><animate fill="freeze" attributeName="stroke-dashoffset" calcMode="spline" dur="0.5s" keySplines="0.65 0 0.35 1" keyTimes="0;1" values="6.73;0"/></line><g opacity=".5" class="jbr0jgb4g"><path class="t_r-15p8k"><animate fill="freeze" attributeName="opacity" dur="0.2s" keyTimes="0;0.4;1" values="0;0;1"/><animate fill="freeze" attributeName="stroke-dashoffset" calcMode="spline" dur="0.58s" keySplines="0 0 1 1;0.65 0 0.35 1" keyTimes="0;0.138;1" values="7.13;7.13;0"/></path><path class="bo8dc4bej"><animate fill="freeze" attributeName="opacity" dur="0.2s" keyTimes="0;0.4;1" values="0;0;1"/><animate fill="freeze" attributeName="stroke-dashoffset" calcMode="spline" dur="0.58s" keySplines="0 0 1 1;0.65 0 0.35 1" keyTimes="0;0.138;1" values="7.13;7.13;0"/></path></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:checks-draw"} {...others} />);
}

export default Component;
