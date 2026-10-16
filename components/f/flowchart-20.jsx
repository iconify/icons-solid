import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jlfukpbru.css';
import '../../css/s/sgrfz4b3j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jlfukpbru"/><path class="sgrfz4b3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flowchart-20"} {...others} />);
}

export default Component;
