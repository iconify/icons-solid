import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/prptthbtt.css';
import '../../css/w/wu4g6i-qu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="prptthbtt"/><path class="wu4g6i-qu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:teslamate"} {...others} />);
}

export default Component;
