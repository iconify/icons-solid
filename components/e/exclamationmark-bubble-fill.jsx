import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_q9dm1pu.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="k_q9dm1pu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:exclamationmark-bubble-fill"} {...others} />);
}

export default Component;
