import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u5aa0tfys.css';
import '../../css/r/r1qak2b5n.css';
import '../../css/h/h8k7vyb9j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u5aa0tfys"/><path class="r1qak2b5n"/><path class="h8k7vyb9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cloud-sync-20"} {...others} />);
}

export default Component;
