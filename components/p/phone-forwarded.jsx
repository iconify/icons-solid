import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftw-gh2gl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ftw-gh2gl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:phone-forwarded"} {...others} />);
}

export default Component;
