import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/ildl9bb0g.css';
import '../../css/g/gjvsk4icl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ildl9bb0g"/><path class="gjvsk4icl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:signal-tower"} {...others} />);
}

export default Component;
