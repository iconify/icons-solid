import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b5o54xhzc.css';
import '../../css/l/lob8-1bfv.css';
import '../../css/x/xo8hlacyi.css';
import '../../css/r/r6o6r4bvb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b5o54xhzc"/><path class="lob8-1bfv"/><path class="xo8hlacyi"/><path class="r6o6r4bvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:vertical-align-top1"} {...others} />);
}

export default Component;
