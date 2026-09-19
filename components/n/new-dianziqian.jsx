import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lladf0b0k.css';
import '../../css/q/q3_qw6b8e.css';
import '../../css/r/rk9-wgvlh.css';
import '../../css/w/w76jl489n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="lladf0b0k"/><path class="q3_qw6b8e"/><path class="rk9-wgvlh"/><path class="w76jl489n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:new-dianziqian"} {...others} />);
}

export default Component;
