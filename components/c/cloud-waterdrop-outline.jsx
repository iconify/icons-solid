import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sk0v-q3wa.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sk0v-q3wa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-waterdrop-outline"} {...others} />);
}

export default Component;
