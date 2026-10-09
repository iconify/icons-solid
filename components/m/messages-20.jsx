import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2ik_bbaf.css';
import '../../css/i/idjsz7b6f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t2ik_bbaf"/><path class="idjsz7b6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:messages-20"} {...others} />);
}

export default Component;
