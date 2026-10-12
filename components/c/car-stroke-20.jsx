import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tem_62y7z.css';
import '../../css/y/yx0hc3b0s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tem_62y7z"/><path class="yx0hc3b0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:car-stroke-20"} {...others} />);
}

export default Component;
