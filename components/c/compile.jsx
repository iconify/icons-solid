import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6g_pnb0l.css';

const viewBox = {"width":1026,"height":1025};
const content = `<path class="s6g_pnb0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:compile"} {...others} />);
}

export default Component;
