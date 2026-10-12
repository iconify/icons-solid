import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/ky2yn_bnw.css';
import '../../css/u/uoszq0bfz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ky2yn_bnw"/><path class="uoszq0bfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cellular-network-3g"} {...others} />);
}

export default Component;
