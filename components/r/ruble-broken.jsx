import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pt0bne2qz.css';
import '../../css/h/h18jbxq3b.css';
import '../../css/k/ko6o-6b9b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pt0bne2qz"/><path class="h18jbxq3b"/><path class="ko6o-6b9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ruble-broken"} {...others} />);
}

export default Component;
