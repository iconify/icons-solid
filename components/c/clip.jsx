import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/n/ngswk3bei.css';
import '../../css/b/bweogcbns.css';
import '../../css/w/w-j1gt0db.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="ngswk3bei"/><path class="bweogcbns"/><path class="w-j1gt0db"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:clip"} {...others} />);
}

export default Component;
