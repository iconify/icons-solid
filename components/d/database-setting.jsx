import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mwz9-fkga.css';
import '../../css/e/ehhtfzb3b.css';
import '../../css/o/o_egw1vkx.css';
import '../../css/v/vygavxbon.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><ellipse class="mwz9-fkga"/><path class="ehhtfzb3b"/><path class="o_egw1vkx"/><path class="vygavxbon"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:database-setting"} {...others} />);
}

export default Component;
