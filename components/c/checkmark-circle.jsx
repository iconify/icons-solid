import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eu1u2abpn.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="eu1u2abpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:checkmark-circle"} {...others} />);
}

export default Component;
