import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1t2jvjmb.css';
import '../../css/t/tizvf-b2j.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="u1t2jvjmb"/><path class="tizvf-b2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:phone-set"} {...others} />);
}

export default Component;
