import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vt1f1hbir.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vt1f1hbir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:aas-project-c-filled"} {...others} />);
}

export default Component;
