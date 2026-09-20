import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e38ojchyh.css';
import '../../css/c/c24svnd2a.css';
import '../../css/d/d1s63ybjv.css';
import '../../css/g/gvp4ae15o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="e38ojchyh"/><path class="c24svnd2a"/><circle class="d1s63ybjv"/><circle class="gvp4ae15o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:text-tool-filled"} {...others} />);
}

export default Component;
