import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/plymhoh3i.css';
import '../../css/d/dxxr-08um.css';
import '../../css/p/pbcox6rvl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="plymhoh3i"/><path class="dxxr-08um"/><path class="pbcox6rvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:power-restore-20"} {...others} />);
}

export default Component;
