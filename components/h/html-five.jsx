import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/z/z_m2-cb_v.css';
import '../../css/e/eelehmb1s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="z_m2-cb_v"/><path class="eelehmb1s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:html-five"} {...others} />);
}

export default Component;
