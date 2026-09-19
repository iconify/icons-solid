import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uxdv6cb7b.css';
import '../../css/k/k2gjebdhi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uxdv6cb7b"/><path class="k2gjebdhi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:personal-hygiene-hand-wipe-paper-4"} {...others} />);
}

export default Component;
