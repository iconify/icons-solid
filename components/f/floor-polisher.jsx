import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hsi4k-bcc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hsi4k-bcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:floor-polisher"} {...others} />);
}

export default Component;
