import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/u6m301bmx.css';
import '../../css/v/vp8h42b5y.css';
import '../../css/n/n-uwetbfn.css';
import '../../css/r/rl_t8z6gz.css';
import '../../css/y/ypq9hxtyu.css';
import '../../css/a/ac-4q0e0a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="u6m301bmx"/><path class="vp8h42b5y"/><path class="n-uwetbfn"/><path class="rl_t8z6gz"/><path class="ypq9hxtyu"/><path class="ac-4q0e0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:palace"} {...others} />);
}

export default Component;
