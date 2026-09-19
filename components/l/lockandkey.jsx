import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o3jxsg1op.css';
import '../../css/k/kt2gkjn1h.css';
import '../../css/p/pejt3f8ll.css';
import '../../css/d/dem270o5u.css';
import '../../css/k/kv2w_5bmr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o3jxsg1op"/><path class="kt2gkjn1h"/><path class="pejt3f8ll"/><path class="dem270o5u"/><path class="kv2w_5bmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:lockandkey"} {...others} />);
}

export default Component;
