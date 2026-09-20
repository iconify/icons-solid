import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oxwyg-nau.css';
import '../../css/b/bsmo95b2x.css';
import '../../css/g/gquevqb_d.css';
import '../../css/o/ohcc56b0j.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="oxwyg-nau"/><path class="bsmo95b2x"/><path class="gquevqb_d"/><path class="ohcc56b0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:paintbrush-2"} {...others} />);
}

export default Component;
