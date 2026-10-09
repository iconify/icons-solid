import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtkttskyz.css';
import '../../css/d/d1zhrdbsy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jtkttskyz"/><path class="d1zhrdbsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flag-20-bold"} {...others} />);
}

export default Component;
