import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tnvy_fbgp.css';
import '../../css/y/yrumspm5z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tnvy_fbgp"/><path class="yrumspm5z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-phone-02"} {...others} />);
}

export default Component;
