import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/saug-4bzs.css';
import '../../css/o/oeo28rbja.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="saug-4bzs"/><path class="oeo28rbja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-browser"} {...others} />);
}

export default Component;
