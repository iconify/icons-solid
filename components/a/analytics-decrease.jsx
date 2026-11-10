import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qn56i8hoh.css';
import '../../css/j/j3dz97r7p.css';
import '../../css/c/c9yqeebif.css';
import '../../css/e/emurol-3o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qn56i8hoh"/><path class="j3dz97r7p"/><path class="c9yqeebif"/><path class="emurol-3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:analytics-decrease"} {...others} />);
}

export default Component;
