import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/civh5k3ed.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="civh5k3ed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:hedera"} {...others} />);
}

export default Component;
