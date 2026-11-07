import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vfyjxnopo.css';
import '../../css/c/czwlizb6n.css';
import '../../css/k/k-qmgxbel.css';
import '../../css/e/ej9c85b1m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vfyjxnopo"/><path class="czwlizb6n"/><path class="k-qmgxbel"/><path class="ej9c85b1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-fall-minimalistic-line-duotone"} {...others} />);
}

export default Component;
