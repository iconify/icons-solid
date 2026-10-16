import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cds5php0e.css';
import '../../css/w/w2rqhou5x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cds5php0e"/><path class="w2rqhou5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:disconnector-20"} {...others} />);
}

export default Component;
