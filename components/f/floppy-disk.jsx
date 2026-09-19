import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vyiao3hmk.css';
import '../../css/o/oo_ve568a.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="vyiao3hmk"/><path class="oo_ve568a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:floppy-disk"} {...others} />);
}

export default Component;
