import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fr6-kta2b.css';
import '../../css/y/y2-wh7hrf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="fr6-kta2b"/><path class="y2-wh7hrf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:customer-service-01"} {...others} />);
}

export default Component;
