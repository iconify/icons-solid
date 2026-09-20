import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqv1ecbnn.css';
import '../../css/d/df0l6dbti.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="sqv1ecbnn"/><path class="df0l6dbti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:game"} {...others} />);
}

export default Component;
