import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbwrsq0kl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mbwrsq0kl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:dialpad-circle-01"} {...others} />);
}

export default Component;
