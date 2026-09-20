import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vaji_jb3d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vaji_jb3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:circle-slice-8"} {...others} />);
}

export default Component;
