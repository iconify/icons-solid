import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4hsm_bxh.css';
import '../../css/j/j51w7z-wj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="d4hsm_bxh"/><path class="j51w7z-wj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:chevron-circle-down-o"} {...others} />);
}

export default Component;
