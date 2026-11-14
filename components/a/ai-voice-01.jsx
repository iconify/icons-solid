import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xy2e0nbar.css';
import '../../css/e/e9xwutbft.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xy2e0nbar"/><path class="e9xwutbft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-voice-01"} {...others} />);
}

export default Component;
