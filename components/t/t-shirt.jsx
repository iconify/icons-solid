import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/g/g2varx82w.css';
import '../../css/a/ath4nsb8r.css';
import '../../css/o/ofyi_e0mt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="g2varx82w"/><path class="ath4nsb8r"/><path class="ofyi_e0mt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:t-shirt"} {...others} />);
}

export default Component;
