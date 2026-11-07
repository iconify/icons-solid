import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9qkg1brs.css';
import '../../css/u/ut2c2s13u.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/q/qzk5zubqx.css';
import '../../css/f/fujosbckp.css';
import '../../css/k/k_arrub8k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c9qkg1brs"/><path clip-rule="evenodd" class="ut2c2s13u"/><g class="xtpeb-edw"><path class="qzk5zubqx"/><path class="fujosbckp"/><path class="k_arrub8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tornado-bold-duotone"} {...others} />);
}

export default Component;
