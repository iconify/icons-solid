import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxwjsibxu.css';
import '../../css/t/trpnkyp1z.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="fxwjsibxu"/><path class="trpnkyp1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:zohomail"} {...others} />);
}

export default Component;
