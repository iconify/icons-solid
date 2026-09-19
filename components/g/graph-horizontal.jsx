import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sd93zo4hw.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="sd93zo4hw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:graph-horizontal"} {...others} />);
}

export default Component;
