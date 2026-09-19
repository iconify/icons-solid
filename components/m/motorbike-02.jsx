import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i0wtp628f.css';
import '../../css/q/q7zvs2b6v.css';
import '../../css/d/d3tu5-t0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="i0wtp628f"/><circle class="q7zvs2b6v"/><path class="d3tu5-t0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:motorbike-02"} {...others} />);
}

export default Component;
