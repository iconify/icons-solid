import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/td2li1bqd.css';
import '../../css/h/hiknrmb5a.css';
import '../../css/k/k670-muck.css';
import '../../css/f/ftbjcpb6l.css';
import '../../css/x/xs2r8ub4x.css';
import '../../css/r/rgs6j1b_u.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="td2li1bqd"/><path class="hiknrmb5a"/><path class="k670-muck"/><path class="ftbjcpb6l"/><path class="xs2r8ub4x"/><path class="rgs6j1b_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:browser-dashboard"} {...others} />);
}

export default Component;
