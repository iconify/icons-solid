import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ie-wxdblp.css';
import '../../css/j/jv2hyob1g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ie-wxdblp"/><path class="jv2hyob1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dehumidifier-48"} {...others} />);
}

export default Component;
