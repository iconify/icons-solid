import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_z-ilrca.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k_z-ilrca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:apple-ios-logo-3-block"} {...others} />);
}

export default Component;
