import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u8ioll_bk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="u8ioll_bk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:dutch-bike"} {...others} />);
}

export default Component;
