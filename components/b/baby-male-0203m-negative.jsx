import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d85qszb-q.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="d85qszb-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:baby-male-0203m-negative"} {...others} />);
}

export default Component;
