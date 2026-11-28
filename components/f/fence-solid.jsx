import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5cmc0r-z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t5cmc0r-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:fence-solid"} {...others} />);
}

export default Component;
