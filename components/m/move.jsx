import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcx6nf7bd.css';

const viewBox = {"width":24,"height":24,"left":-0.5,"top":-1};
const content = `<path class="wcx6nf7bd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:move"} {...others} />);
}

export default Component;
