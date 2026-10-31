import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i099j-b9p.css';
import '../../css/g/gub6cgbzi.css';
import '../../css/i/i18pzgbti.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><line x1="8.64" x2="20.96" y1="6.4" y2="6.4" class="i099j-b9p"><animate fill="freeze" attributeName="opacity" dur="0.12s" values="0;1"/><animate fill="freeze" attributeName="stroke-dashoffset" calcMode="spline" dur="0.5s" keySplines="0.65 0 0.35 1" keyTimes="0;1" values="12.32;0"/></line><line x1="8.64" x2="20.96" y1="12" y2="12" class="i099j-b9p"><animate fill="freeze" attributeName="opacity" dur="0.12s" values="0;1"/><animate fill="freeze" attributeName="stroke-dashoffset" calcMode="spline" dur="0.5s" keySplines="0.65 0 0.35 1" keyTimes="0;1" values="12.32;0"/></line><line x1="8.64" x2="16.48" y1="17.6" y2="17.6" class="gub6cgbzi"><animate fill="freeze" attributeName="opacity" dur="0.12s" values="0;1"/><animate fill="freeze" attributeName="stroke-dashoffset" calcMode="spline" dur="0.5s" keySplines="0.65 0 0.35 1" keyTimes="0;1" values="7.84;0"/></line><g opacity=".5"><line x1="3.6" x2="3.6" y1="5.28" y2="18.72" class="i18pzgbti"><animate fill="freeze" attributeName="opacity" dur="0.2s" keyTimes="0;0.4;1" values="0;0;1"/><animate fill="freeze" attributeName="stroke-dashoffset" calcMode="spline" dur="0.58s" keySplines="0 0 1 1;0.65 0 0.35 1" keyTimes="0;0.138;1" values="13.44;13.44;0"/></line></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:snippets-draw"} {...others} />);
}

export default Component;
