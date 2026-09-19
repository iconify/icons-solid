import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/th1k_ebsx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="th1k_ebsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:gradle"} {...others} />);
}

export default Component;
