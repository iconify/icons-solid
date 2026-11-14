import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mu4u_mbmf.css';
import '../../css/a/abq_pbz6w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="mu4u_mbmf"/><path class="abq_pbz6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:lightbulb"} {...others} />);
}

export default Component;
