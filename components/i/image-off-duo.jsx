import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eg6xwxgcs.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/os9nhhb_x.css';
import '../../css/l/lcz2lpl2x.css';
import '../../css/a/adgljtbqx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eg6xwxgcs secondary"/><g class="dt0cm9dhy primary"><path class="os9nhhb_x"/><path class="lcz2lpl2x"/><path class="adgljtbqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:image-off-duo"} {...others} />);
}

export default Component;
