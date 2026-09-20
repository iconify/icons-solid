import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/araq3t5cx.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="araq3t5cx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:utility-device-with-gas-flame"} {...others} />);
}

export default Component;
