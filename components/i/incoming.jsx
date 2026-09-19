import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/rqnd9ac-f.css';
import '../../css/r/rdtq9xb-o.css';
import '../../css/e/ecnlh9tzj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="rqnd9ac-f"/><path class="rdtq9xb-o"/><path class="ecnlh9tzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:incoming"} {...others} />);
}

export default Component;
