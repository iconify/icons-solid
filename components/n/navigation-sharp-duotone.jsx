import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v47hdr-ij.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v47hdr-ij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:navigation-sharp-duotone"} {...others} />);
}

export default Component;
