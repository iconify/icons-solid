import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t7aepeb-o.css';
import '../../css/p/p2jam80zq.css';
import '../../css/g/ga40el12h.css';
import '../../css/x/xl2l7zq6v.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="t7aepeb-o"/><path class="p2jam80zq"/><path class="ga40el12h"/><path class="xl2l7zq6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:accounting-invoice-mail"} {...others} />);
}

export default Component;
