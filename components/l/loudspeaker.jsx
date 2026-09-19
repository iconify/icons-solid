import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h6ujsc6dr.css';
import '../../css/o/os1y-ybmu.css';
import '../../css/i/ij-pcdclg.css';
import '../../css/l/l2mbojb3k.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="h6ujsc6dr"/><path class="os1y-ybmu"/><path class="ij-pcdclg"/><path class="l2mbojb3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:loudspeaker"} {...others} />);
}

export default Component;
