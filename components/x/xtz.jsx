import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yx82nj_xn.css';
import '../../css/y/yhc01_d5w.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="yx82nj_xn"/><path class="yhc01_d5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:xtz"} {...others} />);
}

export default Component;
