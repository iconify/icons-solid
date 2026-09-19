import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qndom7bvy.css';
import '../../css/p/pmjsmc78b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qndom7bvy"/><path class="pmjsmc78b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:beer-off"} {...others} />);
}

export default Component;
