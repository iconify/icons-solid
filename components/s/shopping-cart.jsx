import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/ufa5_sllq.css';
import '../../css/j/j7muc2v1c.css';
import '../../css/g/gybihlwlp.css';
import '../../css/b/bjwpd3fxo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ufa5_sllq wm-shadow"/><path class="j7muc2v1c wm-shadow"/><path class="gybihlwlp"/><path class="bjwpd3fxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:shopping-cart"} {...others} />);
}

export default Component;
