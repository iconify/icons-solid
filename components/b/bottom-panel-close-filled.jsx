import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nq_qswbdu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nq_qswbdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:bottom-panel-close-filled"} {...others} />);
}

export default Component;
