import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/qzkhf9znl.css';
import '../../css/w/wbsd2bbfh.css';
import '../../css/j/j6pnv4mjo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="qzkhf9znl"/><path class="wbsd2bbfh"/><path class="j6pnv4mjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:picture-one"} {...others} />);
}

export default Component;
