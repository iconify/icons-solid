import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hctj1nb7c.css';
import '../../css/q/qxaqxeblh.css';
import '../../css/m/mjuiasbra.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="hctj1nb7c"/><path class="qxaqxeblh"/><path class="mjuiasbra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:package-plus"} {...others} />);
}

export default Component;
