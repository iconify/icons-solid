import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gtz_8836t.css';
import '../../css/r/rd173ubeg.css';
import '../../css/f/ftbksp_ll.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gtz_8836t"/><path class="rd173ubeg"/><path class="ftbksp_ll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chicken-leg-48"} {...others} />);
}

export default Component;
