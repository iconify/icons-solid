import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/oidqe-epu.css';
import '../../css/h/hako84qye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="oidqe-epu"/><path class="hako84qye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:dropbox"} {...others} />);
}

export default Component;
