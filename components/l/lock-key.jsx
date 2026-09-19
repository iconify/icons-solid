import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eukozub-p.css';
import '../../css/t/tnbv3bc-m.css';
import '../../css/j/j1g38rb7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="eukozub-p"/><path class="tnbv3bc-m"/><path class="j1g38rb7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:lock-key"} {...others} />);
}

export default Component;
