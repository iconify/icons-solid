import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0h02gu-q.css';
import '../../css/z/zfr7hdc4y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r0h02gu-q"/><path class="zfr7hdc4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hurricane-20-bold"} {...others} />);
}

export default Component;
