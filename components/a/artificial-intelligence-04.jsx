import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uqkfw-bek.css';
import '../../css/o/oq9456kmp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uqkfw-bek"/><path class="oq9456kmp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:artificial-intelligence-04"} {...others} />);
}

export default Component;
