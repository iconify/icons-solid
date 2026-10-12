import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o71ldkb2z.css';
import '../../css/v/vh6rjac-s.css';
import '../../css/k/kdy434bla.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><ellipse transform="rotate(90 12.07 11.98)" class="o71ldkb2z"/><path class="vh6rjac-s"/><path class="kdy434bla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:story-up"} {...others} />);
}

export default Component;
