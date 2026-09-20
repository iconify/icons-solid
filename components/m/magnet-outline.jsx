import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u37-xachj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="u37-xachj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magnet-outline"} {...others} />);
}

export default Component;
