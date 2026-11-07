import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czpeh31ty.css';
import '../../css/t/t5jlxaboc.css';
import '../../css/k/k4a7g7bap.css';
import '../../css/w/w9i3xxbev.css';
import '../../css/z/z16x9fbjm.css';
import '../../css/e/e31xt_wcz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="czpeh31ty"/><path class="t5jlxaboc"/><path class="k4a7g7bap"/><path class="w9i3xxbev"/><path class="z16x9fbjm"/><path class="e31xt_wcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:diploma-bold-duotone"} {...others} />);
}

export default Component;
