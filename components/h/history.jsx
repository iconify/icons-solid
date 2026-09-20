import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b2lh2ub1f.css';
import '../../css/c/c2zv7fbst.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b2lh2ub1f"/><path class="c2zv7fbst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:history"} {...others} />);
}

export default Component;
