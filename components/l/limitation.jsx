import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c394reb9z.css';
import '../../css/d/dcgw77bis.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c394reb9z"/><circle class="dcgw77bis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:limitation"} {...others} />);
}

export default Component;
