import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dxcrfs7mw.css';
import '../../css/a/anknrzihx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="dxcrfs7mw"/><path class="anknrzihx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cylinder-03"} {...others} />);
}

export default Component;
