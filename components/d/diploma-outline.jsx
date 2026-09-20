import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pi3ef9muv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pi3ef9muv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:diploma-outline"} {...others} />);
}

export default Component;
