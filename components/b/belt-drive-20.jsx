import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pjg5rdbcc.css';
import '../../css/b/bgc6dhdml.css';
import '../../css/n/nbcjn_bcc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pjg5rdbcc"/><path class="bgc6dhdml"/><path class="nbcjn_bcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:belt-drive-20"} {...others} />);
}

export default Component;
