import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fvk4ocgpn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fvk4ocgpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:arrow-circle-up-right"} {...others} />);
}

export default Component;
