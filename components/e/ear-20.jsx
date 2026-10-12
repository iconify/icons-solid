import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ycxe1lb0r.css';
import '../../css/e/eohaobbab.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ycxe1lb0r"/><path class="eohaobbab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ear-20"} {...others} />);
}

export default Component;
