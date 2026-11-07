import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gb0xcujan.css';
import '../../css/u/uxqwpab0d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gb0xcujan"/><path class="uxqwpab0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stars-bold"} {...others} />);
}

export default Component;
