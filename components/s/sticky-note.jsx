import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fpmo-6vfv.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="fpmo-6vfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:sticky-note"} {...others} />);
}

export default Component;
