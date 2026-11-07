import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fly9otqib.css';
import '../../css/g/ggztb9bes.css';
import '../../css/k/k_gu13b6s.css';
import '../../css/q/qv07b1bbr.css';
import '../../css/o/ol11kpbfc.css';
import '../../css/g/gcctpwkja.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fly9otqib"/><path clip-rule="evenodd" class="ggztb9bes"/><path class="k_gu13b6s"/><path class="qv07b1bbr"/><path class="ol11kpbfc"/><path class="gcctpwkja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:table-columns-split-outline"} {...others} />);
}

export default Component;
