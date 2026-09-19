import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q69k124zj.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="q69k124zj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"academicons:open-materials-square"} {...others} />);
}

export default Component;
