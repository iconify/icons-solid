import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c5m-dcckw.css';
import '../../css/v/vcjs8gbll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c5m-dcckw"/><path class="vcjs8gbll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-video"} {...others} />);
}

export default Component;
