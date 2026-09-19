import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/o/oa5j-48mv.css';
import '../../css/j/jhl2qpj5j.css';
import '../../css/g/gp6kkrbtf.css';
import '../../css/k/kp5qh9bof.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><rect class="oa5j-48mv"/><path class="jhl2qpj5j"/><path class="gp6kkrbtf"/><rect class="kp5qh9bof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:conditioner"} {...others} />);
}

export default Component;
