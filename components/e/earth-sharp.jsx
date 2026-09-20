import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/asc4s_bwj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="asc4s_bwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:earth-sharp"} {...others} />);
}

export default Component;
