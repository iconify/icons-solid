import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djgu3wb1d.css';
import '../../css/z/zahr89b5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="djgu3wb1d"/><path class="zahr89b5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ghost"} {...others} />);
}

export default Component;
