import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tnts1mbfb.css';
import '../../css/c/c8vjbmb6l.css';
import '../../css/o/o0c09q5sk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tnts1mbfb"/><path class="c8vjbmb6l"/><path class="o0c09q5sk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:airplane-takeoff"} {...others} />);
}

export default Component;
