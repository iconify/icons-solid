import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a9e6llb2l.css';
import '../../css/z/z4yh73ins.css';
import '../../css/o/o09k2wvmn.css';
import '../../css/d/drwxlkbur.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="a9e6llb2l wm-shadow"/><path class="z4yh73ins"/><path class="o09k2wvmn"/><path class="drwxlkbur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:hard-drive"} {...others} />);
}

export default Component;
