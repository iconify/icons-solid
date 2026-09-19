import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/es8r095um.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="es8r095um"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:redo"} {...others} />);
}

export default Component;
