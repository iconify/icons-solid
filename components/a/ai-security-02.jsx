import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/ch-c-mbci.css';
import '../../css/j/jboz0obdn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ch-c-mbci"/><path class="jboz0obdn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-security-02"} {...others} />);
}

export default Component;
