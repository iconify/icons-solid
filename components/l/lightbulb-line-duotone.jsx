import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zvrx42i3v.css';
import '../../css/z/zfvp08v5a.css';
import '../../css/h/h54ylcbtg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zvrx42i3v"/><path class="zfvp08v5a"/><path class="h54ylcbtg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lightbulb-line-duotone"} {...others} />);
}

export default Component;
