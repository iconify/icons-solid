import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emv79z_7s.css';
import '../../css/u/uedxr2vmg.css';
import '../../css/b/b4j8a-5qc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="emv79z_7s"/><path class="uedxr2vmg"/><path class="b4j8a-5qc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:quote-20-bold"} {...others} />);
}

export default Component;
