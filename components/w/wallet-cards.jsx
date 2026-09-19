import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r_-i9nb0q.css';
import '../../css/f/fbpj6ebdl.css';
import '../../css/q/qjwo1qbxu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r_-i9nb0q"/><path class="fbpj6ebdl"/><path class="qjwo1qbxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:wallet-cards"} {...others} />);
}

export default Component;
