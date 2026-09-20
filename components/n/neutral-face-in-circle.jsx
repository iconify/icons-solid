import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_dl_z0j.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gp_dl_z0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:neutral-face-in-circle"} {...others} />);
}

export default Component;
