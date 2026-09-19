import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6rceob1t.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="y6rceob1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:eight-of-bamboos-mahjong"} {...others} />);
}

export default Component;
