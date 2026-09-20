import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/s/s_5rrdb7b.css';
import '../../css/i/iq7w8h2jf.css';
import '../../css/k/kuar6yfma.css';
import '../../css/g/go52lxd2s.css';
import '../../css/a/a-tw77iau.css';
import '../../css/i/ispua1bus.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="xyjtgccot"><path class="s_5rrdb7b"/><path class="iq7w8h2jf"/><path class="kuar6yfma"/></g><path class="go52lxd2s"/><path class="a-tw77iau"/><path class="ispua1bus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:checkmark-outlined"} {...others} />);
}

export default Component;
