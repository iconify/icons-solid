import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y6055741k.css';
import '../../css/a/a46ke6beu.css';
import '../../css/v/vtyy1gbqu.css';
import '../../css/o/ocv7r6bbp.css';
import '../../css/d/doy9q4b5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="y6055741k"/><path class="a46ke6beu"/><path class="vtyy1gbqu"/><path class="ocv7r6bbp"/><circle class="doy9q4b5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:refresh-circle-line-duotone"} {...others} />);
}

export default Component;
