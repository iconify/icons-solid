import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9mk0zbpx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j9mk0zbpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:phone-incoming-solid"} {...others} />);
}

export default Component;
