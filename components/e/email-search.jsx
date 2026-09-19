import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/v/vccu39vmu.css';
import '../../css/p/p216qf55d.css';
import '../../css/r/rxw2lyrtd.css';
import '../../css/x/xd05dybgk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="vccu39vmu"/><circle class="p216qf55d"/><path class="rxw2lyrtd"/><path class="xd05dybgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:email-search"} {...others} />);
}

export default Component;
