import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ksvyc4bov.css';

const viewBox = {"width":1216,"height":1632};
const content = `<path class="ksvyc4bov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:door-closed"} {...others} />);
}

export default Component;
