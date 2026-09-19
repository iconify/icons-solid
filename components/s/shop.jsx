import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/dh-grkqhx.css';
import '../../css/t/tndk6jbtn.css';
import '../../css/z/znpqvvbqb.css';
import '../../css/k/k4u4q3l9f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="dh-grkqhx"/><path class="tndk6jbtn"/><path class="znpqvvbqb"/><rect class="k4u4q3l9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:shop"} {...others} />);
}

export default Component;
