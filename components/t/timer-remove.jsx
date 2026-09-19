import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/irr6brgnt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="irr6brgnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:timer-remove"} {...others} />);
}

export default Component;
