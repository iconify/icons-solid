import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/li7mzybab.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="li7mzybab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oi:lock-unlocked"} {...others} />);
}

export default Component;
