import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mpue87gvs.css';
import '../../css/i/iezp-tb3d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mpue87gvs"/><path class="iezp-tb3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cloud-warning-bold"} {...others} />);
}

export default Component;
