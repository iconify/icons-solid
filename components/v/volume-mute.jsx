import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iahw3kbqm.css';

const viewBox = {"width":17,"height":24};
const content = `<path class="iahw3kbqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:volume-mute"} {...others} />);
}

export default Component;
