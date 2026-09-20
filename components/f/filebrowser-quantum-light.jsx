import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9s81cs5j.css';
import '../../css/r/rm6kyddwf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x9s81cs5j"/><path class="rm6kyddwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:filebrowser-quantum-light"} {...others} />);
}

export default Component;
