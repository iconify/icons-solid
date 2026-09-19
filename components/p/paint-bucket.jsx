import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zrrbm2nes.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zrrbm2nes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:paint-bucket"} {...others} />);
}

export default Component;
