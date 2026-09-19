import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k-nzex--m.css';
import '../../css/l/lxh66fbrh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k-nzex--m"/><path class="lxh66fbrh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-x-light"} {...others} />);
}

export default Component;
