import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2o-q5bqy.css';
import '../../css/v/v51dofb5w.css';
import '../../css/r/rsiohj6qn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c2o-q5bqy"/><path class="v51dofb5w"/><path class="rsiohj6qn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:earthing-switch-48"} {...others} />);
}

export default Component;
