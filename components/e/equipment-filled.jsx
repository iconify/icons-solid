import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gam_9d_az.css';
import '../../css/l/lqted7wxy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gam_9d_az"/><path clip-rule="evenodd" class="lqted7wxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:equipment-filled"} {...others} />);
}

export default Component;
