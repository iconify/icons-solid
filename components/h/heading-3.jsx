import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/h0m6sdfml.css';
import '../../css/w/wkab_zovm.css';
import '../../css/t/ty8j8obsl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="h0m6sdfml"/><path class="wkab_zovm"/><path class="ty8j8obsl wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:heading-3"} {...others} />);
}

export default Component;
