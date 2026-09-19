import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezfwb2bob.css';
import '../../css/q/qvf68znnu.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="ezfwb2bob"/><path class="qvf68znnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:page-copy"} {...others} />);
}

export default Component;
