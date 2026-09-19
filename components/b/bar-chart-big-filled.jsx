import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1ohtunpb.css';
import '../../css/u/uxtfceu2g.css';
import '../../css/q/qcfr4vtpo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w1ohtunpb"/><rect class="uxtfceu2g"/><path class="qcfr4vtpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:bar-chart-big-filled"} {...others} />);
}

export default Component;
