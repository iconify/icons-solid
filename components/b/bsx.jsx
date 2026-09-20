import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6w0s-0ys.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s6w0s-0ys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:bsx"} {...others} />);
}

export default Component;
