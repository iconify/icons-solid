import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/una0qyech.css';
import '../../css/g/gzmmb_5vu.css';
import '../../css/x/x5dd3rcaj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="una0qyech"/><path class="gzmmb_5vu"/><path class="x5dd3rcaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:quote-48-bold"} {...others} />);
}

export default Component;
