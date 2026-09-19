import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/qnylsibzn.css';
import '../../css/y/y7kz-h4zl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="qnylsibzn"/><path class="y7kz-h4zl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:rotation-vertical"} {...others} />);
}

export default Component;
