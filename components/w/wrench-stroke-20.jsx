import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hkfru2t8u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hkfru2t8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:wrench-stroke-20"} {...others} />);
}

export default Component;
