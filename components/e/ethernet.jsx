import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/psz3s1eih.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="psz3s1eih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:ethernet"} {...others} />);
}

export default Component;
