import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djym6wg5f.css';
import '../../css/v/vdsmzq_1v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="djym6wg5f"/><path class="vdsmzq_1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:link-external-rtl"} {...others} />);
}

export default Component;
