import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti9suu5lc.css';
import '../../css/v/v4rt0mblj.css';
import '../../css/k/kb3qv9b3z.css';
import '../../css/m/mf9o9n5rb.css';
import '../../css/i/iwj00ck4i.css';
import '../../css/a/a57658x1e.css';
import '../../css/v/vomldszvb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ti9suu5lc"/><path class="v4rt0mblj"/><path class="kb3qv9b3z"/><path class="mf9o9n5rb"/><path class="iwj00ck4i"/><path class="a57658x1e"/><path clip-rule="evenodd" class="vomldszvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:calendar-outline"} {...others} />);
}

export default Component;
