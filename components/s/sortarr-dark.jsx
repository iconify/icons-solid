import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7vmbpvxl.css';
import '../../css/f/flopf26xs.css';
import '../../css/g/gra5yw4ra.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="e7vmbpvxl"/><path class="flopf26xs"/><path class="gra5yw4ra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sortarr-dark"} {...others} />);
}

export default Component;
