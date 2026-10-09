import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5l7ikz-n.css';
import '../../css/x/xsu5q83hj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h5l7ikz-n"/><path class="xsu5q83hj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smart-plug-20"} {...others} />);
}

export default Component;
