import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pl4nvkpwh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pl4nvkpwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:aqara-h2-switch"} {...others} />);
}

export default Component;
