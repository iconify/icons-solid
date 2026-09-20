import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwo41-b-s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fwo41-b-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:twitter-logo-1"} {...others} />);
}

export default Component;
