import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yhxby1bcx.css';
import '../../css/y/yk-i_mbkh.css';
import '../../css/k/kg3owjulh.css';
import '../../css/b/b7g409bfi.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="yhxby1bcx"/><path class="yk-i_mbkh"/><path class="kg3owjulh"/><path class="b7g409bfi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:strategy-tasks"} {...others} />);
}

export default Component;
