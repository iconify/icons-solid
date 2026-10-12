import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o71ldkb2z.css';
import '../../css/a/a11gbwb4z.css';
import '../../css/d/d0140mbog.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse transform="rotate(90 12.07 11.98)" class="o71ldkb2z"/><path class="a11gbwb4z"/><path class="d0140mbog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:story-one"} {...others} />);
}

export default Component;
