import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y8xfwqbqk.css';
import '../../css/i/i7-t02b5j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y8xfwqbqk"/><path class="i7-t02b5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:8-ball-filled"} {...others} />);
}

export default Component;
