import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/feeids0fq.css';
import '../../css/w/whujt0lbg.css';
import '../../css/s/sjk5febne.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="feeids0fq"/><path class="whujt0lbg"/><path class="sjk5febne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:repeat-48-bold"} {...others} />);
}

export default Component;
