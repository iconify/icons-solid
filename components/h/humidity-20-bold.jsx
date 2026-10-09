import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b68k1jbxl.css';
import '../../css/d/despmrd_s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b68k1jbxl"/><path class="despmrd_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:humidity-20-bold"} {...others} />);
}

export default Component;
