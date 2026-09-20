import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oc4beac5y.css';
import '../../css/r/rr1ygbacx.css';
import '../../css/o/oh-ffpj9g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="oc4beac5y"/><path class="rr1ygbacx"/><path class="oh-ffpj9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-left-line-duotone"} {...others} />);
}

export default Component;
