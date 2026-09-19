import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k3l50k9jw.css';
import '../../css/h/h6_wij6jb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k3l50k9jw"/><path class="h6_wij6jb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hackerrank"} {...others} />);
}

export default Component;
