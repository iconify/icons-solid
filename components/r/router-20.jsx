import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zx2n-7xqn.css';
import '../../css/b/bpbl5vkki.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zx2n-7xqn"/><path class="bpbl5vkki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:router-20"} {...others} />);
}

export default Component;
