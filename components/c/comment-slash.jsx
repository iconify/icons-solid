import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ms98do_7z.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="ms98do_7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:comment-slash"} {...others} />);
}

export default Component;
