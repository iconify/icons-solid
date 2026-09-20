import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sn_sgnaqq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sn_sgnaqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:terminal-duotone"} {...others} />);
}

export default Component;
