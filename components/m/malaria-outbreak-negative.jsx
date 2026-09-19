import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fi2wjab-j.css';
import '../../css/j/jipjiqbrr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#healthiconsMalariaOutbreakNegative0)"><path clip-rule="evenodd" class="fi2wjab-j"/></g><defs><clipPath id="healthiconsMalariaOutbreakNegative0"><path class="jipjiqbrr"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:malaria-outbreak-negative"} {...others} />);
}

export default Component;
