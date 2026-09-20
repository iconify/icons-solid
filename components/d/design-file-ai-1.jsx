import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hi4m-fb_p.css';
import '../../css/y/yf1n3v_ff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hi4m-fb_p"/><path class="yf1n3v_ff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:design-file-ai-1"} {...others} />);
}

export default Component;
