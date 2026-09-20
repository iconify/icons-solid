import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbay4z5qe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bbay4z5qe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:proxmox-logo"} {...others} />);
}

export default Component;
