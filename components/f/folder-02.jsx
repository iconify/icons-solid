import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/f/fn1lflbar.css';
import '../../css/h/hq8mhmbjq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="fn1lflbar"/><path class="hq8mhmbjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-02"} {...others} />);
}

export default Component;
