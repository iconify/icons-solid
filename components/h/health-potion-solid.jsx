import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qu-0zabiq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qu-0zabiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:health-potion-solid"} {...others} />);
}

export default Component;
