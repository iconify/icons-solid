import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j88ll_bcn.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="j88ll_bcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blood-bag-negative"} {...others} />);
}

export default Component;
