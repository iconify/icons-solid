import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t8u-0odzx.css';
import '../../css/j/jw3ea426c.css';
import '../../css/m/mq9ysbb3f.css';
import '../../css/x/xq57sm5pa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t8u-0odzx"/><path class="jw3ea426c"/><path class="mq9ysbb3f"/><path class="xq57sm5pa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:lock-duotone"} {...others} />);
}

export default Component;
