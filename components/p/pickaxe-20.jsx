import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vq-4s2b4h.css';
import '../../css/k/ko8go1bco.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vq-4s2b4h"/><path class="ko8go1bco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pickaxe-20"} {...others} />);
}

export default Component;
