import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmcb4ub3e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bmcb4ub3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:comment-image"} {...others} />);
}

export default Component;
