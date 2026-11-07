import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y8wn08zhi.css';
import '../../css/m/mnjv0ybzu.css';
import '../../css/a/af53pzb1g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="y8wn08zhi"/><path class="mnjv0ybzu"/><path class="af53pzb1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-top-line-duotone"} {...others} />);
}

export default Component;
