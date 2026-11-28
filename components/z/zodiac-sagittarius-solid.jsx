import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ut-0zoohp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ut-0zoohp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:zodiac-sagittarius-solid"} {...others} />);
}

export default Component;
