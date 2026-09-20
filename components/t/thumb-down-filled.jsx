import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6qq-91sq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e6qq-91sq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:thumb-down-filled"} {...others} />);
}

export default Component;
