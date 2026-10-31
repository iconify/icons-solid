import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xxy4eau_a.css';
import '../../css/u/uujgzzyfl.css';
import '../../css/z/z512fnsji.css';
import '../../css/o/ox8k29ibx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow xxy4eau_a"/><path class="uujgzzyfl wm-shadow"/><path class="z512fnsji"/><path class="ox8k29ibx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:file-plus"} {...others} />);
}

export default Component;
