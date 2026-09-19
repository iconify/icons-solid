import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ebdenr-ck.css';
import '../../css/f/f-rwydb1g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ebdenr-ck"/><path class="f-rwydb1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tool-case"} {...others} />);
}

export default Component;
