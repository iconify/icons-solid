import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fel8-rbzx.css';
import '../../css/g/ghwlb4bnj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fel8-rbzx"/><path class="ghwlb4bnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:lock-stroke-20"} {...others} />);
}

export default Component;
