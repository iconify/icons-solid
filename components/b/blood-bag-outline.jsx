import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5i-2dx-j.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="k5i-2dx-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blood-bag-outline"} {...others} />);
}

export default Component;
