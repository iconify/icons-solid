import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dl3476bnb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dl3476bnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:keyframe-minus-in"} {...others} />);
}

export default Component;
