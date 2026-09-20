import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lp259dblt.css';
import '../../css/z/zxoo5x2zq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lp259dblt"/><path class="zxoo5x2zq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:natural-disaster-volcano-smoke"} {...others} />);
}

export default Component;
