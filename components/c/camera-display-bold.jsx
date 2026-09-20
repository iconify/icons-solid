import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n09ipgd9w.css';
import '../../css/k/ky3p1qa5e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n09ipgd9w"/><path class="ky3p1qa5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:camera-display-bold"} {...others} />);
}

export default Component;
