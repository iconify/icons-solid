import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gzesfbb8z.css';
import '../../css/q/qccj0vbum.css';
import '../../css/d/dlp7nstpk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gzesfbb8z"/><path class="qccj0vbum"/><circle class="dlp7nstpk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:container-registry"} {...others} />);
}

export default Component;
