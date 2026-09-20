import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txz7hobqh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="txz7hobqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:board-game-jenga-bold"} {...others} />);
}

export default Component;
