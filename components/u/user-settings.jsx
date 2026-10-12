import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/ddulb1r7o.css';
import '../../css/b/b_-gkxb7l.css';
import '../../css/h/h7yoa_bbp.css';
import '../../css/a/adr-sbbrv.css';
import '../../css/x/x9g6iubus.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ddulb1r7o"/><path class="b_-gkxb7l"/><circle transform="rotate(-90 18.75 18.73)" class="h7yoa_bbp"/><path class="adr-sbbrv"/><path class="x9g6iubus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user-settings"} {...others} />);
}

export default Component;
