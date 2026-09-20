import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v13-n1bhp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v13-n1bhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:vlc-logo-block"} {...others} />);
}

export default Component;
