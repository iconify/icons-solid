import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6_qklbkh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c6_qklbkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:droplet-sharp-duotone"} {...others} />);
}

export default Component;
