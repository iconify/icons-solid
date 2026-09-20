import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/crn5zwh2r.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="crn5zwh2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lock-password-bold"} {...others} />);
}

export default Component;
