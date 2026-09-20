import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udpzpgm1j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="udpzpgm1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:spinner"} {...others} />);
}

export default Component;
