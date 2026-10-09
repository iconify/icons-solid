import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/druapyb0f.css';
import '../../css/p/psdm-j5hl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="druapyb0f"/><path class="psdm-j5hl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermal-storage-20-bold"} {...others} />);
}

export default Component;
