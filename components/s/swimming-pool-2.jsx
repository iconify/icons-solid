import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mab8s_msf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mab8s_msf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:swimming-pool-2"} {...others} />);
}

export default Component;
