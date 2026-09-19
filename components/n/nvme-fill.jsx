import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y2uxy2bbj.css';
import '../../css/q/qoy9edcng.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="y2uxy2bbj"/><path class="qoy9edcng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:nvme-fill"} {...others} />);
}

export default Component;
