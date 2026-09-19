import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rucr588rq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rucr588rq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:play-bar-v-two-in"} {...others} />);
}

export default Component;
