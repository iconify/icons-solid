import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zv5gi5b9f.css';
import '../../css/l/l624pqxrk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zv5gi5b9f"/><path class="l624pqxrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:uranium-20-bold"} {...others} />);
}

export default Component;
