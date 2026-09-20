import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l96-r8sfd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l96-r8sfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:card-2-outline"} {...others} />);
}

export default Component;
