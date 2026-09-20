import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qsxeh2bfn.css';
import '../../css/u/uxyzhxvwz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="qsxeh2bfn"/><path class="uxyzhxvwz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:button"} {...others} />);
}

export default Component;
