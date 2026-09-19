import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u79ntacah.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u79ntacah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-shape-triangle"} {...others} />);
}

export default Component;
