import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti4q6eknm.css';
import '../../css/a/ahzy9_h0v.css';
import '../../css/l/ln6f3q98l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ti4q6eknm"><path class="ahzy9_h0v"/><path class="ln6f3q98l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:gymnastics-one"} {...others} />);
}

export default Component;
