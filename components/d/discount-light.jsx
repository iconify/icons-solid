import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/q/qxdk-jbxj.css';
import '../../css/m/m54lx25iz.css';
import '../../css/u/ukqelmnlf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="qxdk-jbxj"/><path class="m54lx25iz"/><path class="ukqelmnlf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:discount-light"} {...others} />);
}

export default Component;
