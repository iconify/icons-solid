import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5yn_xycd.css';
import '../../css/a/ay4kxuviq.css';
import '../../css/p/p6k6mbb3b.css';
import '../../css/q/q3wikmbln.css';
import '../../css/q/q7u8ikxeb.css';
import '../../css/n/n1fzulbhm.css';
import '../../css/w/w-bcadb1h.css';
import '../../css/p/pcif24fqh.css';
import '../../css/x/x3bvjdb8m.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="r5yn_xycd"/><circle class="ay4kxuviq"/><circle class="p6k6mbb3b"/><circle class="q3wikmbln"/><circle class="q7u8ikxeb"/><circle class="n1fzulbhm"/><circle class="w-bcadb1h"/><circle class="pcif24fqh"/><path class="x3bvjdb8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:carbon-for-aem"} {...others} />);
}

export default Component;
