import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5bja3brp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w5bja3brp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ai-face-circle-look-up-solid"} {...others} />);
}

export default Component;
