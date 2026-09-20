import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q1s0wnp6w.css';
import '../../css/z/zqzhegyvw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="q1s0wnp6w"/><path class="zqzhegyvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:check-multiple-16"} {...others} />);
}

export default Component;
