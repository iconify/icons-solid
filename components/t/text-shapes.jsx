import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fgbb3bemw.css';
import '../../css/u/uykx6e1uw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fgbb3bemw"/><path class="uykx6e1uw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:text-shapes"} {...others} />);
}

export default Component;
