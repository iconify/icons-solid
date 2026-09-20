import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kqkf61b4u.css';
import '../../css/j/jntepjbop.css';
import '../../css/a/ah4cqtuiz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kqkf61b4u"/><path class="jntepjbop"/><path class="ah4cqtuiz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:speaker-1"} {...others} />);
}

export default Component;
