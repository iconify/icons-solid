import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ajkjnyfua.css';
import '../../css/a/atu155_sz.css';
import '../../css/k/k8ybt-i3o.css';
import '../../css/o/ov_am2bxb.css';

const viewBox = {"width":600,"height":600};
const content = `<g class="ft5dv1b6b"><path class="ajkjnyfua"/><path class="atu155_sz"/><path class="k8ybt-i3o"/><path class="ov_am2bxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:firebase"} {...others} />);
}

export default Component;
