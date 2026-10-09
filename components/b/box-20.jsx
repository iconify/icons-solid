import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqn8gqb4e.css';
import '../../css/m/m-ue7vdss.css';
import '../../css/u/u_-d_vaka.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hqn8gqb4e"/><path class="m-ue7vdss"/><path class="u_-d_vaka"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:box-20"} {...others} />);
}

export default Component;
