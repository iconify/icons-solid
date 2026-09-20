import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wnxtu2a1f.css';
import '../../css/p/pt_8qebbk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wnxtu2a1f"/><path clip-rule="evenodd" class="pt_8qebbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:cutter-16"} {...others} />);
}

export default Component;
