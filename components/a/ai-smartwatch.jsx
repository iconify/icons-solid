import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kwm-i6kdf.css';
import '../../css/z/zzw-d1k2j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kwm-i6kdf"/><path class="zzw-d1k2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-smartwatch"} {...others} />);
}

export default Component;
