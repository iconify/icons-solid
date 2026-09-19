import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7yn-bb8l.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="r7yn-bb8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:player-stop-bold"} {...others} />);
}

export default Component;
