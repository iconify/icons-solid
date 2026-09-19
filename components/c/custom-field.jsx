import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k9ijfssau.css';
import '../../css/h/hvpk04b-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k9ijfssau"/><path class="hvpk04b-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:custom-field"} {...others} />);
}

export default Component;
