import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5mh2ibhp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e5mh2ibhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-photos-logo-solid"} {...others} />);
}

export default Component;
