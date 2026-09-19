import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjf68__wr.css';
import '../../css/s/slmsaib5j.css';
import '../../css/x/x0g-2fbkx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fjf68__wr"/><path class="slmsaib5j"/><path class="x0g-2fbkx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:layers"} {...others} />);
}

export default Component;
