import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kbwk-fhrm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kbwk-fhrm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-drive-logo-2-block"} {...others} />);
}

export default Component;
