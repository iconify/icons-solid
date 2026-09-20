import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cntfi1b8n.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="cntfi1b8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:ruler-alt"} {...others} />);
}

export default Component;
