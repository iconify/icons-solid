import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4v_z4_rj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o4v_z4_rj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:speed-up-line"} {...others} />);
}

export default Component;
