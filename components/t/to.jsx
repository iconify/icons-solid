import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x9mgh_1ih.css';
import '../../css/o/osn5q0bun.css';
import '../../css/b/b2vi1jmew.css';
import '../../css/b/bqsnk8bjb.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="x9mgh_1ih"/><path class="osn5q0bun"/><path class="b2vi1jmew"/><path class="bqsnk8bjb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:to"} {...others} />);
}

export default Component;
