import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mjfhnp7yw.css';
import '../../css/c/cyhr1fblx.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="mjfhnp7yw"/><path class="cyhr1fblx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:guide"} {...others} />);
}

export default Component;
