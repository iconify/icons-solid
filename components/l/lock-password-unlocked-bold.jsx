import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvu1ofbri.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hvu1ofbri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lock-password-unlocked-bold"} {...others} />);
}

export default Component;
