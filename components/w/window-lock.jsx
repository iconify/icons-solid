import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ze2jbkbwo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ze2jbkbwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:window-lock"} {...others} />);
}

export default Component;
