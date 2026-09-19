import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/t2t68ccfp.css';
import '../../css/b/b535abcuw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="t2t68ccfp"/><path class="b535abcuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mouse-pointer-click"} {...others} />);
}

export default Component;
