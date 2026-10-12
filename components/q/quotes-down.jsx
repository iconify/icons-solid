import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/znqedw7pe.css';
import '../../css/m/mee4o569l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="znqedw7pe"/><path class="mee4o569l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:quotes-down"} {...others} />);
}

export default Component;
