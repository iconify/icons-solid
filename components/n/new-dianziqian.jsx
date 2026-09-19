import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhzvabbex.css';
import '../../css/q/q3_qw6b8e.css';
import '../../css/s/sdj60ogwn.css';
import '../../css/w/w76jl489n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rhzvabbex"/><path class="q3_qw6b8e"/><path class="sdj60ogwn"/><path class="w76jl489n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:new-dianziqian"} {...others} />);
}

export default Component;
