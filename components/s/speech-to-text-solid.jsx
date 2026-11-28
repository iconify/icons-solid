import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ugr2cuw1z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ugr2cuw1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:speech-to-text-solid"} {...others} />);
}

export default Component;
