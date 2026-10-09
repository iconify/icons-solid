import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/auq7ad76r.css';
import '../../css/r/ro9kkyupz.css';
import '../../css/c/cnrdjjbmd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="auq7ad76r"/><path class="ro9kkyupz"/><path class="cnrdjjbmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:transformer-48"} {...others} />);
}

export default Component;
