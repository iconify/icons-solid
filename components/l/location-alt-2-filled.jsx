import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ixo8itb4g.css';
import '../../css/k/k0mq39bwn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ixo8itb4g"/><path class="k0mq39bwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:location-alt-2-filled"} {...others} />);
}

export default Component;
