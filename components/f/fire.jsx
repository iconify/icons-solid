import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ov04gg5zt.css';
import '../../css/j/j1t---_1f.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ov04gg5zt"/><path class="j1t---_1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:fire"} {...others} />);
}

export default Component;
