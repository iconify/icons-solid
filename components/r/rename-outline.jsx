import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dwgzm4b3d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dwgzm4b3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:rename-outline"} {...others} />);
}

export default Component;
