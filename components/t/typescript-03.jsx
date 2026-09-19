import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wvgut8b1f.css';
import '../../css/k/knvp32e5i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wvgut8b1f"/><path class="knvp32e5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:typescript-03"} {...others} />);
}

export default Component;
