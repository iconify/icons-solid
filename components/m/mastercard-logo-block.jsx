import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f36i_688s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="f36i_688s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:mastercard-logo-block"} {...others} />);
}

export default Component;
