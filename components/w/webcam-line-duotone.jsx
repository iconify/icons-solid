import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v_cyp7bey.css';
import '../../css/h/h16-ldbyu.css';
import '../../css/j/j0g72kb3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="v_cyp7bey"/><path class="h16-ldbyu"/><path class="j0g72kb3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:webcam-line-duotone"} {...others} />);
}

export default Component;
