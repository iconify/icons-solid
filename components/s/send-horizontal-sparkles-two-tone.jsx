import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gif58rbjy.css';
import '../../css/z/zr4-guboc.css';
import '../../css/n/nsch9pbtc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gif58rbjy"/><path class="zr4-guboc"/><path class="nsch9pbtc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:send-horizontal-sparkles-two-tone"} {...others} />);
}

export default Component;
