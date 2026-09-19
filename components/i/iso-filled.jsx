import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oji3akbpr.css';
import '../../css/y/yvg_m-b6q.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="oji3akbpr"/><path class="yvg_m-b6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:iso-filled"} {...others} />);
}

export default Component;
