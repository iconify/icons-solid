import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x22sjqb2c.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="x22sjqb2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-award-crown-reward-social-rating-media-queen-vip-king-crown"} {...others} />);
}

export default Component;
