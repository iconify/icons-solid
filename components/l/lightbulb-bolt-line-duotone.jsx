import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zvrx42i3v.css';
import '../../css/z/zfvp08v5a.css';
import '../../css/x/x_k-9kb8w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zvrx42i3v"/><path class="zfvp08v5a"/><path class="x_k-9kb8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lightbulb-bolt-line-duotone"} {...others} />);
}

export default Component;
