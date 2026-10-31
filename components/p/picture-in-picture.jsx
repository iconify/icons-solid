import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qkpf7-2jn.css';
import '../../css/l/lh9gq8cab.css';
import '../../css/k/kluqlxt4c.css';
import '../../css/x/xxvxxnbzl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="qkpf7-2jn wm-shadow"/><path class="lh9gq8cab wm-shadow"/><path class="kluqlxt4c"/><path class="xxvxxnbzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:picture-in-picture"} {...others} />);
}

export default Component;
