import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/skw6qbb9b.css';
import '../../css/z/ztdjq8bbv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="skw6qbb9b"/><path class="ztdjq8bbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:distribution-board-20-bold"} {...others} />);
}

export default Component;
