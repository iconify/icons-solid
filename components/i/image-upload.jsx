import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qtn6etb4o.css';
import '../../css/h/ho3oitlqc.css';
import '../../css/k/ki0noac0g.css';
import '../../css/p/pb53-ibny.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="qtn6etb4o"/><path class="ho3oitlqc"/><path class="ki0noac0g"/><path class="pb53-ibny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:image-upload"} {...others} />);
}

export default Component;
