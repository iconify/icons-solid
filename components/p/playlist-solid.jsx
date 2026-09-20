import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v5vpj0gqk.css';
import '../../css/m/m87stabfo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v5vpj0gqk"/><path class="m87stabfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:playlist-solid"} {...others} />);
}

export default Component;
