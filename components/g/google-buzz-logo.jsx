import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/juz7x9ihj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="juz7x9ihj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-buzz-logo"} {...others} />);
}

export default Component;
