import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jg1e7ries.css';
import '../../css/f/f6pehu7hc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jg1e7ries"/><path class="f6pehu7hc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-innovation-02"} {...others} />);
}

export default Component;
