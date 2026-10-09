import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxuy46bpc.css';
import '../../css/i/iwfk82blf.css';
import '../../css/r/ry87ujb8s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oxuy46bpc"/><path class="iwfk82blf"/><path class="ry87ujb8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:milk-carton-48-bold"} {...others} />);
}

export default Component;
