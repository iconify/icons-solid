import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zn6vgnbbf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zn6vgnbbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:alligator-clip"} {...others} />);
}

export default Component;
