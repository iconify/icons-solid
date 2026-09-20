import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vjh1sbbsy.css';
import '../../css/i/ina-j_cjo.css';
import '../../css/z/zgwjpbbox.css';
import '../../css/p/pyjezxbzm.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="vjh1sbbsy"/><path class="ina-j_cjo"/><path class="zgwjpbbox"/><path class="pyjezxbzm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:iris-scan"} {...others} />);
}

export default Component;
