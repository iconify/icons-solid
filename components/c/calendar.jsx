import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9nbzj2qc.css';
import '../../css/n/nzs58m68f.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="j9nbzj2qc"/><path class="nzs58m68f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:calendar"} {...others} />);
}

export default Component;
