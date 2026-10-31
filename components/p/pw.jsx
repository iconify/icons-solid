import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h8_ayybzs.css';
import '../../css/y/yckz_vbuh.css';

const viewBox = {"width":301,"height":189};
const content = `<g class="ft5dv1b6b"><path class="h8_ayybzs"/><circle class="yckz_vbuh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:pw"} {...others} />);
}

export default Component;
