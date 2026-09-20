import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hoz0x3i9y.css';
import '../../css/c/c2l-kjb0w.css';
import '../../css/f/f3odz3d8a.css';
import '../../css/i/i130hcb9f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hoz0x3i9y"/><circle class="c2l-kjb0w"/><path class="f3odz3d8a"/><path class="i130hcb9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nodyx-dark"} {...others} />);
}

export default Component;
