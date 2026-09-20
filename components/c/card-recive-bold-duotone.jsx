import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4-q_acah.css';
import '../../css/r/rve9bjm7q.css';
import '../../css/g/gvic217pt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q4-q_acah"/><path clip-rule="evenodd" class="rve9bjm7q"/><path class="gvic217pt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:card-recive-bold-duotone"} {...others} />);
}

export default Component;
