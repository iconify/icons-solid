import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-34vlb0v.css';
import '../../css/t/t38at1bzr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j-34vlb0v"/><path class="t38at1bzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:shekel"} {...others} />);
}

export default Component;
