import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sa6uupbcb.css';
import '../../css/s/sb8342bfd.css';
import '../../css/c/csq3qnmej.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sa6uupbcb"/><path class="sb8342bfd"/><circle class="csq3qnmej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hand-coins"} {...others} />);
}

export default Component;
