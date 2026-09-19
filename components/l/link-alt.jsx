import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/joiiavbdl.css';
import '../../css/z/zuv7dvbxa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="joiiavbdl"/><path class="zuv7dvbxa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:link-alt"} {...others} />);
}

export default Component;
