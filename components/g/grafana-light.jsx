import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/q/qtdx69blr.css';
import '../../css/m/mfsg-tbww.css';
import '../../css/m/mad_2hbbu.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path fill="url(#SVGEi1Hjddo)" class="qtdx69blr"/><defs><linearGradient id="SVGEi1Hjddo" x1="129.039" x2="129.039" y1="282.048" y2="50.683" gradientUnits="userSpaceOnUse"><stop class="mfsg-tbww"/><stop offset="1" class="mad_2hbbu"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:grafana-light"} {...others} />);
}

export default Component;
