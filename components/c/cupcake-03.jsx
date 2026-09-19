import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/b/b762ssb3l.css';
import '../../css/d/do5c85pxd.css';
import '../../css/b/b7af41btv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="b762ssb3l"/><path class="do5c85pxd"/><path class="b7af41btv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cupcake-03"} {...others} />);
}

export default Component;
