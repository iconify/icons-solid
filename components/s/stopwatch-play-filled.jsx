import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2sx36b-b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k2sx36b-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:stopwatch-play-filled"} {...others} />);
}

export default Component;
