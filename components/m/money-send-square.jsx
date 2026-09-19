import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x7z8ft8ni.css';
import '../../css/q/qjyf55b-j.css';
import '../../css/e/eaoa-ybqh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="x7z8ft8ni"/><path class="qjyf55b-j"/><path class="eaoa-ybqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:money-send-square"} {...others} />);
}

export default Component;
