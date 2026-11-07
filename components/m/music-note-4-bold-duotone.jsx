import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_p9czbut.css';
import '../../css/x/xnfkpachl.css';
import '../../css/f/fvspzabcn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g_p9czbut"/><path class="xnfkpachl"/><path class="fvspzabcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-note-4-bold-duotone"} {...others} />);
}

export default Component;
