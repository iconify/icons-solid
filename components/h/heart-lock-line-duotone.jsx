import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/ckhddnose.css';
import '../../css/z/ztulofeqi.css';
import '../../css/q/qjcn1b-9j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ckhddnose"/><path class="ztulofeqi"/><path class="qjcn1b-9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:heart-lock-line-duotone"} {...others} />);
}

export default Component;
