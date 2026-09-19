import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zhx9aotxt.css';
import '../../css/u/u-sf_6btt.css';
import '../../css/g/g5rmplr5j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zhx9aotxt"/><path class="u-sf_6btt"/><path class="g5rmplr5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:mail-in"} {...others} />);
}

export default Component;
