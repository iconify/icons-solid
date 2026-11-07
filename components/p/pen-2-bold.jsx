import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0g6pwobn.css';
import '../../css/c/cr3ha7_yx.css';
import '../../css/x/xq9y5i0nj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x0g6pwobn"/><path class="cr3ha7_yx"/><path class="xq9y5i0nj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pen-2-bold"} {...others} />);
}

export default Component;
