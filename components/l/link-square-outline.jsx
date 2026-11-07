import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4p_kzgss.css';
import '../../css/y/yz_54e91d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k4p_kzgss"/><path class="yz_54e91d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:link-square-outline"} {...others} />);
}

export default Component;
