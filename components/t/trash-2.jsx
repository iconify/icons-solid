import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/ak0-m4edt.css';
import '../../css/b/b_qx3vb8g.css';
import '../../css/a/abffh731e.css';
import '../../css/e/emg4v2bzp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ak0-m4edt wm-shadow"/><path class="b_qx3vb8g wm-shadow"/><path class="abffh731e"/><path class="emg4v2bzp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:trash-2"} {...others} />);
}

export default Component;
