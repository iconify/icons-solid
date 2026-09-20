import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oiu8l7b3m.css';
import '../../css/u/u_2rd8bgn.css';
import '../../css/n/nud7jhjqw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="oiu8l7b3m"/><path class="u_2rd8bgn"/><path class="nud7jhjqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:graph-dot"} {...others} />);
}

export default Component;
