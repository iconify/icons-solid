import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pepcxkbtl.css';
import '../../css/b/bkagalxid.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pepcxkbtl"/><path class="bkagalxid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electricity-bill-20"} {...others} />);
}

export default Component;
