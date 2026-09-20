import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pat_cd9rj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pat_cd9rj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:editor-guide-lines-magnet"} {...others} />);
}

export default Component;
