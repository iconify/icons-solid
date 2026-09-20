import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ccj7lubgn.css';
import '../../css/j/j94gsjbfv.css';

const viewBox = {"width":240,"height":234};
const content = `<path class="ccj7lubgn"/><path class="j94gsjbfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:dreamweaver"} {...others} />);
}

export default Component;
