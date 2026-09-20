import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwt2_zb5t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wwt2_zb5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:kodi-logo"} {...others} />);
}

export default Component;
