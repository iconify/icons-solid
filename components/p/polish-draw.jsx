import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n3brusb4f.css';
import '../../css/w/wv9z2fbua.css';
import '../../css/b/bq6tlcbjl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><line x1="3.04" x2="20.96" y1="6.4" y2="6.4" class="n3brusb4f"><animate fill="freeze" attributeName="opacity" dur="0.12s" values="0;1"/><animate fill="freeze" attributeName="stroke-dashoffset" calcMode="spline" dur="0.5s" keySplines="0.65 0 0.35 1" keyTimes="0;1" values="17.93;0"/></line><line x1="3.04" x2="14.24" y1="11.44" y2="11.44" class="wv9z2fbua"><animate fill="freeze" attributeName="opacity" dur="0.12s" values="0;1"/><animate fill="freeze" attributeName="stroke-dashoffset" calcMode="spline" dur="0.5s" keySplines="0.65 0 0.35 1" keyTimes="0;1" values="11.2;0"/></line><g opacity=".5"><path class="bq6tlcbjl"><animate fill="freeze" attributeName="opacity" dur="0.2s" keyTimes="0;0.4;1" values="0;0;1"/><animate fill="freeze" attributeName="stroke-dashoffset" calcMode="spline" dur="0.58s" keySplines="0 0 1 1;0.65 0 0.35 1" keyTimes="0;0.138;1" values="11.88;11.88;0"/></path></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:polish-draw"} {...others} />);
}

export default Component;
