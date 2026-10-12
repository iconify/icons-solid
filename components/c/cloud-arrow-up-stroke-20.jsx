import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3s1yw0am.css';
import '../../css/h/h0u2-1bxh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y3s1yw0am"/><path class="h0u2-1bxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:cloud-arrow-up-stroke-20"} {...others} />);
}

export default Component;
