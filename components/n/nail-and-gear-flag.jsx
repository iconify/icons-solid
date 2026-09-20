import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vv91otbba.css';
import '../../css/m/mq-122b5g.css';
import '../../css/x/xdtovnk0g.css';
import '../../css/p/ph-mjcb4f.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="vv91otbba"/><path clip-rule="evenodd" class="mq-122b5g"/><path class="xdtovnk0g"/><path class="ph-mjcb4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:nail-and-gear-flag"} {...others} />);
}

export default Component;
