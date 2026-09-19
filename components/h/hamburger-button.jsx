import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/od8jeie2e.css';
import '../../css/w/w0sf9rb7l.css';
import '../../css/g/g0yq44bbv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="od8jeie2e"/><path class="w0sf9rb7l"/><path class="g0yq44bbv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hamburger-button"} {...others} />);
}

export default Component;
