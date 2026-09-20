import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nd00cbc6q.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="nd00cbc6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:pixel-arrow-bottom-left"} {...others} />);
}

export default Component;
