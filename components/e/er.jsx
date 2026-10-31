import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/du46yjbbq.css';
import '../../css/z/z741_-bcd.css';
import '../../css/v/v92h_qbhp.css';
import '../../css/w/wisjxkbkb.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="du46yjbbq"/><path class="z741_-bcd"/><path class="v92h_qbhp"/><path class="wisjxkbkb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:er"} {...others} />);
}

export default Component;
