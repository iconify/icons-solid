import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/owj3ghg8i.css';
import '../../css/c/c974m8b_r.css';
import '../../css/k/kigmuob9w.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="owj3ghg8i"/><path class="c974m8b_r"/><path class="kigmuob9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:internet-network-laptop"} {...others} />);
}

export default Component;
