import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ytue-4f0g.css';
import '../../css/b/b9ie63b_b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ytue-4f0g"/><path class="b9ie63b_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-voice-02"} {...others} />);
}

export default Component;
