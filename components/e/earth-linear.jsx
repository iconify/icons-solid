import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y-ioddvys.css';
import '../../css/y/y44uunbxa.css';
import '../../css/u/uvx097b-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="y-ioddvys"/><path class="y44uunbxa"/><path class="uvx097b-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:earth-linear"} {...others} />);
}

export default Component;
