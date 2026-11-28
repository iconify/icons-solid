import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-b07z5rd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t-b07z5rd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:strikethrough-solid"} {...others} />);
}

export default Component;
