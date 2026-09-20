import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/q/q2eqevsyd.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rqp2nibwo.css';
import '../../css/z/z_sv4eb8c.css';
import '../../css/a/a7263c4oy.css';

const viewBox = {"width":32,"height":32};
const content = `<mask id="SVGeni7GdIK" class="n1mjunbsu"><path clip-rule="evenodd" class="q2eqevsyd"/></mask><g class="ft5dv1b6b"><path class="rqp2nibwo"/><path clip-rule="evenodd" class="z_sv4eb8c"/><path mask="url(#SVGeni7GdIK)" class="a7263c4oy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"quill:calendar-more"} {...others} />);
}

export default Component;
