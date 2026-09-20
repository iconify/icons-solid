import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5r9tz_qq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y5r9tz_qq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:comment-alt-lock"} {...others} />);
}

export default Component;
