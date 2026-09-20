import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8xu4hqsm.css';

const viewBox = {"width":142.8,"height":35.2};
const content = `<path class="r8xu4hqsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:onelogin"} {...others} />);
}

export default Component;
