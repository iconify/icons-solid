import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xp_nt6zvj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xp_nt6zvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:heart-cupid"} {...others} />);
}

export default Component;
