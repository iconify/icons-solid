import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dg60n9v0v.css';
import '../../css/x/xk17nnbgw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="dg60n9v0v"/><path class="xk17nnbgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:glasses"} {...others} />);
}

export default Component;
