import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/s/s9l5d9fik.css';
import '../../css/j/jl30by25v.css';
import '../../css/t/ty2li_eot.css';
import '../../css/o/o3ryz6b7l.css';
import '../../css/w/wvswoqgyu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><rect class="s9l5d9fik"/><rect class="jl30by25v"/><path class="ty2li_eot"/><path class="o3ryz6b7l"/><path class="wvswoqgyu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:nail-polish-one"} {...others} />);
}

export default Component;
