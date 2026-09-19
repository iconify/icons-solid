import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/d0osp5o0j.css';
import '../../css/c/cjtb3eb-m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="d0osp5o0j"/><path class="cjtb3eb-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:git"} {...others} />);
}

export default Component;
