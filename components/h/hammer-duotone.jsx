import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/ste35xvlg.css';
import '../../css/h/hlb_npbvv.css';
import '../../css/w/wpwd_2bno.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ste35xvlg"/><path class="hlb_npbvv"/><path class="wpwd_2bno"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:hammer-duotone"} {...others} />);
}

export default Component;
