import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e7olr2b8h.css';
import '../../css/l/lp_j939vo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e7olr2b8h"/><path class="lp_j939vo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:video-check"} {...others} />);
}

export default Component;
