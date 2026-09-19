import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/q/q-7r1-bmd.css';
import '../../css/k/kj_hitb4o.css';
import '../../css/s/syrm5jbdq.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="circleFlagsChm0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsChm0)"><path class="q-7r1-bmd"/><path class="kj_hitb4o"/><path class="syrm5jbdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:chm"} {...others} />);
}

export default Component;
