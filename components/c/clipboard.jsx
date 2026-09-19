import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l-xq-1bpb.css';
import '../../css/e/e4n8cdcst.css';
import '../../css/k/k-vg18sac.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="l-xq-1bpb"/><path class="e4n8cdcst"/><path class="k-vg18sac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:clipboard"} {...others} />);
}

export default Component;
