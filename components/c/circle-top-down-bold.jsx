import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sh-3ee_ik.css';
import '../../css/e/ecbj7fz0m.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sh-3ee_ik"/><path class="ecbj7fz0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:circle-top-down-bold"} {...others} />);
}

export default Component;
