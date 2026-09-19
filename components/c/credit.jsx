import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/l9pjosibo.css';
import '../../css/l/lg-df-5wa.css';
import '../../css/q/qkkkz55hz.css';
import '../../css/y/y08oegk6j.css';
import '../../css/n/n52yinngx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="l9pjosibo"/><path class="lg-df-5wa"/><path class="qkkkz55hz"/><path class="y08oegk6j"/><path class="n52yinngx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:credit"} {...others} />);
}

export default Component;
