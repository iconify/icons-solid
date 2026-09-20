import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qok2qrelu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qok2qrelu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:shazam-logo-solid"} {...others} />);
}

export default Component;
