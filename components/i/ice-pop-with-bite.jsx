import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s56hofbat.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="s56hofbat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:ice-pop-with-bite"} {...others} />);
}

export default Component;
