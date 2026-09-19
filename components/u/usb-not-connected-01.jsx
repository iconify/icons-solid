import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/n48hqvbia.css';
import '../../css/f/f9t7w0heh.css';
import '../../css/q/qo505gp0f.css';
import '../../css/g/gvzsngngi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="n48hqvbia"/><path class="f9t7w0heh"/><path class="qo505gp0f"/><path class="gvzsngngi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:usb-not-connected-01"} {...others} />);
}

export default Component;
