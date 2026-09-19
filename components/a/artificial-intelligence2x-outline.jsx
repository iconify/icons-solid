import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-q68rezq.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="t-q68rezq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:artificial-intelligence2x-outline"} {...others} />);
}

export default Component;
