import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v4x3u8_wr.css';
import '../../css/t/td61ysgvc.css';
import '../../css/x/x28ntvb8l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="v4x3u8_wr"/><path class="td61ysgvc"/><path class="x28ntvb8l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rocket-line-duotone"} {...others} />);
}

export default Component;
