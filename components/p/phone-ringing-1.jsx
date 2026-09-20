import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/edf_ykbzy.css';
import '../../css/e/eiod7z1da.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="edf_ykbzy"/><path class="eiod7z1da"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:phone-ringing-1"} {...others} />);
}

export default Component;
