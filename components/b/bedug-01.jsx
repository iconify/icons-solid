import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rxxld_bnp.css';
import '../../css/h/hxyh7mrat.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rxxld_bnp"/><path class="hxyh7mrat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bedug-01"} {...others} />);
}

export default Component;
