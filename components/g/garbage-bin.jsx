import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q-2bqg8hv.css';
import '../../css/g/g1389ibvp.css';
import '../../css/q/qg6ljvbwg.css';
import '../../css/d/d-5w3r35u.css';
import '../../css/z/zu37hxnlg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q-2bqg8hv"/><path class="g1389ibvp"/><path class="qg6ljvbwg"/><path class="d-5w3r35u"/><path class="zu37hxnlg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:garbage-bin"} {...others} />);
}

export default Component;
