import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ev1jbccli.css';
import '../../css/i/if80w2ton.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ev1jbccli"/><path class="if80w2ton"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-in-up-circle-half-filled"} {...others} />);
}

export default Component;
