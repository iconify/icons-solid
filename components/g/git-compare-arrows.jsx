import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s-4x4bc8a.css';
import '../../css/e/e_ihsbb-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s-4x4bc8a"/><path class="e_ihsbb-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:git-compare-arrows"} {...others} />);
}

export default Component;
