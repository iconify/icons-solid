import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/buu83bc7q.css';
import '../../css/u/u6-gzybtm.css';
import '../../css/z/z3z28obht.css';
import '../../css/l/l0-y8h92r.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="buu83bc7q"/><path class="u6-gzybtm"/><path class="z3z28obht"/><path class="l0-y8h92r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:soft-ice-cream"} {...others} />);
}

export default Component;
