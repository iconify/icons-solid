import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmb_z30dz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rmb_z30dz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:folder-open-filled"} {...others} />);
}

export default Component;
