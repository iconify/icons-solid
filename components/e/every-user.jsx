import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/g2e3-xb4j.css';
import '../../css/j/jfgjanxpp.css';
import '../../css/o/oqflbw88g.css';
import '../../css/o/ovtvrgkrb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><circle class="g2e3-xb4j"/><circle class="jfgjanxpp"/><circle class="oqflbw88g"/><path class="ovtvrgkrb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:every-user"} {...others} />);
}

export default Component;
