import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h001g9p5s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h001g9p5s primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:zodiac-taurus-duotone"} {...others} />);
}

export default Component;
