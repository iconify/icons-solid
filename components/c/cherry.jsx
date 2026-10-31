import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/h8h0kebzw.css';
import '../../css/t/t0_qigmae.css';
import '../../css/g/go71ikbrb.css';
import '../../css/e/egw__1kxp.css';
import '../../css/o/owxju6b8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="h8h0kebzw wm-shadow"/><path class="t0_qigmae wm-shadow"/><path class="go71ikbrb"/><path class="egw__1kxp"/><path class="owxju6b8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:cherry"} {...others} />);
}

export default Component;
