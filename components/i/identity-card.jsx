import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xazew2bwr.css';
import '../../css/o/o-l3bp_4y.css';
import '../../css/k/k6t-lxbar.css';
import '../../css/a/a1om0n7hg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="xazew2bwr"/><path class="o-l3bp_4y"/><path class="k6t-lxbar"/><path class="a1om0n7hg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:identity-card"} {...others} />);
}

export default Component;
