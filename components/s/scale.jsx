import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/w0l1u8rdw.css';
import '../../css/h/h7zioyf4u.css';
import '../../css/f/frl_d4bif.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="w0l1u8rdw wm-shadow"/><path class="h7zioyf4u wm-shadow"/><path class="frl_d4bif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:scale"} {...others} />);
}

export default Component;
