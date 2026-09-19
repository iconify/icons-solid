import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cgy9vuh7d.css';
import '../../css/i/ilu-h0bpn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="cgy9vuh7d"/><path class="ilu-h0bpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:fct"} {...others} />);
}

export default Component;
