import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cb8yn-bbs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cb8yn-bbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:snapdragon"} {...others} />);
}

export default Component;
