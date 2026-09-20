import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vz0c-7acw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vz0c-7acw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:layers-minimalistic-outline"} {...others} />);
}

export default Component;
