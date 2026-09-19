import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rm30bdpol.css';
import '../../css/t/tvbix7bxx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rm30bdpol"/><path class="tvbix7bxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-in-down-right-stroke-circle-filled"} {...others} />);
}

export default Component;
