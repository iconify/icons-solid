import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qto03pbfn.css';
import '../../css/h/hemx3sbcg.css';
import '../../css/d/dk02ivbjy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qto03pbfn"/><path clip-rule="evenodd" class="hemx3sbcg"/><path class="dk02ivbjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:zone"} {...others} />);
}

export default Component;
