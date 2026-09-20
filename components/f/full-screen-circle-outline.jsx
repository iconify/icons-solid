import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v49232f_z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="v49232f_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:full-screen-circle-outline"} {...others} />);
}

export default Component;
