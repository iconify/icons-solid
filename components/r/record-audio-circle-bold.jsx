import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yrtv4rb5l.css';
import '../../css/b/bidl9_apl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yrtv4rb5l"/><path clip-rule="evenodd" class="bidl9_apl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:record-audio-circle-bold"} {...others} />);
}

export default Component;
