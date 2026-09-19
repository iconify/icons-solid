import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3-hujoeb.css';
import '../../css/w/w5cu6gb4d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f3-hujoeb"/><path class="w5cu6gb4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:receipt"} {...others} />);
}

export default Component;
