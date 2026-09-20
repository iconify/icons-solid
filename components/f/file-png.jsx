import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wq6rz04dx.css';
import '../../css/z/zadk2fo7c.css';
import '../../css/u/u704f14wn.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="wq6rz04dx"/><path class="zadk2fo7c"/><path class="u704f14wn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:file-png"} {...others} />);
}

export default Component;
