import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/n_7zxgbdx.css';
import '../../css/c/cbs__-bag.css';
import '../../css/r/rf4rehats.css';
import '../../css/a/a6ci6d55e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="n_7zxgbdx"/><path class="cbs__-bag"/><path class="rf4rehats"/><rect class="a6ci6d55e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bachelor-cap"} {...others} />);
}

export default Component;
