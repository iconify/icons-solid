import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qu0k8wbat.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qu0k8wbat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-remove-outline"} {...others} />);
}

export default Component;
