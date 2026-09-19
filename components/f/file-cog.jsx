import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n2bb4gasf.css';
import '../../css/s/s5elxcb1s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="n2bb4gasf"/><path class="s5elxcb1s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-cog"} {...others} />);
}

export default Component;
