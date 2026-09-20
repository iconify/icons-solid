import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ov7mw7bgo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ov7mw7bgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-hangouts-meet-logo-block"} {...others} />);
}

export default Component;
