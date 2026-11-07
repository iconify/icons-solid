import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sjq2w1_ae.css';
import '../../css/s/s53by5bzh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sjq2w1_ae"/><path clip-rule="evenodd" class="s53by5bzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:map-point-wave-bold-duotone"} {...others} />);
}

export default Component;
