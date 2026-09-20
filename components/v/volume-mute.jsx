import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mttzz5vbg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mttzz5vbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:volume-mute"} {...others} />);
}

export default Component;
