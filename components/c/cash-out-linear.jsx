import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/ntqzpqbnu.css';
import '../../css/i/i-b1b9mbj.css';
import '../../css/m/mssc0fbma.css';
import '../../css/z/zsvh3abtp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ntqzpqbnu"/><path class="i-b1b9mbj"/><path class="mssc0fbma"/><path class="zsvh3abtp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cash-out-linear"} {...others} />);
}

export default Component;
