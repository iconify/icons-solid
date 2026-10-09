import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jk47rq3ua.css';
import '../../css/k/k-q56dbbd.css';
import '../../css/c/crhvqybvb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jk47rq3ua"/><path class="k-q56dbbd"/><path class="crhvqybvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:inspection-48-bold"} {...others} />);
}

export default Component;
