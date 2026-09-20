import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_9gdlbwc.css';
import '../../css/u/ucd9-zbsv.css';
import '../../css/h/he_hx-ara.css';
import '../../css/a/a2i6mqb_l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p_9gdlbwc"/><path class="ucd9-zbsv"/><path class="he_hx-ara"/><path class="a2i6mqb_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:notes-paper-text"} {...others} />);
}

export default Component;
