import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zv1b57v5d.css';
import '../../css/i/in8v79bvl.css';
import '../../css/n/np3a59flj.css';
import '../../css/d/dwk8h8o9s.css';
import '../../css/e/e67jswcqy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zv1b57v5d"/><path class="in8v79bvl"/><path class="np3a59flj"/><path class="dwk8h8o9s"/><path class="e67jswcqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:film-music"} {...others} />);
}

export default Component;
