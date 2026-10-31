import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/m_1eq48tk.css';
import '../../css/u/uvir12b9m.css';
import '../../css/h/ho994gbvl.css';
import '../../css/k/kb_zc_bwq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="m_1eq48tk wm-shadow"/><path class="uvir12b9m wm-shadow"/><path class="ho994gbvl"/><path class="kb_zc_bwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:star-half"} {...others} />);
}

export default Component;
