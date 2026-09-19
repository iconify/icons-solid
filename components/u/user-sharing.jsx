import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vsiqwbc2m.css';
import '../../css/e/e58-aeear.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vsiqwbc2m"/><path class="e58-aeear"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-sharing"} {...others} />);
}

export default Component;
