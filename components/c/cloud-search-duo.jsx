import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xx3kk1qbx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/da92j5b5b.css';
import '../../css/e/ezq2-zv3v.css';
import '../../css/j/j_x_k9l_s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary xx3kk1qbx"/><g class="dt0cm9dhy primary"><path class="da92j5b5b"/><path class="ezq2-zv3v"/><path class="j_x_k9l_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cloud-search-duo"} {...others} />);
}

export default Component;
