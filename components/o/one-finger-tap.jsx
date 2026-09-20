import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cjmq6jogq.css';
import '../../css/i/i-h79n8ne.css';
import '../../css/t/t4qwofbhw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="cjmq6jogq"/><path class="i-h79n8ne"/><path class="t4qwofbhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:one-finger-tap"} {...others} />);
}

export default Component;
