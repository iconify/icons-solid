import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fzfk-sivt.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="fzfk-sivt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:user-friends"} {...others} />);
}

export default Component;
