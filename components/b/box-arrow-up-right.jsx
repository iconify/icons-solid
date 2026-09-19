import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qqc0bpk9y.css';
import '../../css/o/oc8vnlbsu.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="qqc0bpk9y"/><path class="oc8vnlbsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:box-arrow-up-right"} {...others} />);
}

export default Component;
