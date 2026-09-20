import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2priwbjg.css';
import '../../css/k/k4jeo3qws.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="k2priwbjg"/><path class="k4jeo3qws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:invoice"} {...others} />);
}

export default Component;
