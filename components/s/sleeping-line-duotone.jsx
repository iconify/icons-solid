import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zykeq5bdg.css';
import '../../css/i/it12y4b4a.css';
import '../../css/l/l6md27rub.css';
import '../../css/n/nwrm-pbrz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="zykeq5bdg"/><path class="it12y4b4a"/><path class="l6md27rub"/><path class="nwrm-pbrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sleeping-line-duotone"} {...others} />);
}

export default Component;
