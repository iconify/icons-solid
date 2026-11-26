import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xcripvb-d.css';
import '../../css/q/qi9jmsbwa.css';

const viewBox = {"width":28,"height":28};
const content = `<g class="ft5dv1b6b"><rect class="xcripvb-d"/><path class="qi9jmsbwa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:context7-light"} {...others} />);
}

export default Component;
