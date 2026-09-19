import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/a4dhs4hnq.css';
import '../../css/p/p-tcsib0e.css';
import '../../css/n/n6od47b6s.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="h01tyzbfu"><rect class="a4dhs4hnq"/><path class="p-tcsib0e"/></g><path class="n6od47b6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:microphone-on-stroke-12"} {...others} />);
}

export default Component;
