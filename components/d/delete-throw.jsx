import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/te8vmacae.css';
import '../../css/m/mu7m3-bif.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="te8vmacae"/><path class="mu7m3-bif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:delete-throw"} {...others} />);
}

export default Component;
