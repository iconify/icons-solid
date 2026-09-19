import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iri4s80tq.css';
import '../../css/j/jfedwfb_m.css';
import '../../css/l/lg562ex1n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="iri4s80tq"/><path class="jfedwfb_m"/><path class="lg562ex1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:org-unit"} {...others} />);
}

export default Component;
