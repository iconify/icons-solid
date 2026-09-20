import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sh2dsobkx.css';
import '../../css/q/q0q8vklqr.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="sh2dsobkx"/><path class="q0q8vklqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:zoom-fit-height-16"} {...others} />);
}

export default Component;
