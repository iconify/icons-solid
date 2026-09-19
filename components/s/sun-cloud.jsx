import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b871xtbmf.css';
import '../../css/r/r2vu5bc9q.css';
import '../../css/j/jzks_jb0x.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="b871xtbmf"/><path class="r2vu5bc9q"/><path class="jzks_jb0x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:sun-cloud"} {...others} />);
}

export default Component;
