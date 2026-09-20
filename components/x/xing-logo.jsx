import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmyu2ouwi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wmyu2ouwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:xing-logo"} {...others} />);
}

export default Component;
