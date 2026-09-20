import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/avzyrmbmb.css';
import '../../css/l/lfpw0jbvm.css';
import '../../css/w/w1ojbvb6h.css';
import '../../css/s/squf_mv4w.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="avzyrmbmb"/><path class="lfpw0jbvm"/><path class="w1ojbvb6h"/><path class="squf_mv4w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:mail-reply-all"} {...others} />);
}

export default Component;
