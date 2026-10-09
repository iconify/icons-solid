import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bl_f1i0nt.css';
import '../../css/c/cr_3gebps.css';
import '../../css/z/z7zq9ab0q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bl_f1i0nt"/><path class="cr_3gebps"/><path class="z7zq9ab0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:steel-mill-20"} {...others} />);
}

export default Component;
