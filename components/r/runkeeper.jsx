import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbjd4bx_m.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mbjd4bx_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:runkeeper"} {...others} />);
}

export default Component;
