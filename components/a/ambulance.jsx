import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tp6emhbkc.css';
import '../../css/t/ti4c50bay.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="tp6emhbkc"/><path class="ti4c50bay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:ambulance"} {...others} />);
}

export default Component;
