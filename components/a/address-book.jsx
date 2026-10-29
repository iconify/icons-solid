import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j40xsqehc.css';
import '../../css/g/gigfzcceu.css';
import '../../css/q/q43nulhsd.css';
import '../../css/p/p3cg6-b9n.css';
import '../../css/v/vtes5r9nd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j40xsqehc wm-k"/><path class="gigfzcceu wm-k"/><path class="q43nulhsd wm-k"/><path class="p3cg6-b9n wm-a"/><path class="vtes5r9nd wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:address-book"} {...others} />);
}

export default Component;
