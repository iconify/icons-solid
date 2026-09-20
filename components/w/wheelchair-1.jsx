import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pv7d2m6_b.css';
import '../../css/e/epyc3ir8j.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="pv7d2m6_b"/><path class="epyc3ir8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:wheelchair-1"} {...others} />);
}

export default Component;
