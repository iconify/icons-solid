import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/znversx8x.css';
import '../../css/x/x4xm00rnt.css';
import '../../css/n/nc2ovs5_q.css';
import '../../css/a/a-8ulvb8e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-a znversx8x"/><path class="wm-k x4xm00rnt"/><path class="nc2ovs5_q wm-k"/><path class="a-8ulvb8e wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:fuel"} {...others} />);
}

export default Component;
