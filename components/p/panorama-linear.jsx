import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j3ccklbsh.css';
import '../../css/t/t2cylssnp.css';
import '../../css/v/va6ug5b5i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="j3ccklbsh"/><path class="t2cylssnp"/><path class="va6ug5b5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panorama-linear"} {...others} />);
}

export default Component;
