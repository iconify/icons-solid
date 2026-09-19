import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xww_pnbli.css';
import '../../css/u/ug49ncc0n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xww_pnbli"/><path class="ug49ncc0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sketch"} {...others} />);
}

export default Component;
