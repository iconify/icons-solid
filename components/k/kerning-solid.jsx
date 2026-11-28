import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rtmobu58j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rtmobu58j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:kerning-solid"} {...others} />);
}

export default Component;
