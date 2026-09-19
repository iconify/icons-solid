import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dvy6mmbjg.css';
import '../../css/g/g0preuo0e.css';
import '../../css/c/c9mv_tbxb.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="dvy6mmbjg"/><path clip-rule="evenodd" class="g0preuo0e"/><path class="c9mv_tbxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:film-cartridge"} {...others} />);
}

export default Component;
