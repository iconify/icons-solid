import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qmoq_m65p.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="qmoq_m65p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-light-double-down-left"} {...others} />);
}

export default Component;
