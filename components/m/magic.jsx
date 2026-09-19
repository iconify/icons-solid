import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/snqb6-bdz.css';
import '../../css/c/cvb-85bki.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="snqb6-bdz"/><path class="cvb-85bki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:magic"} {...others} />);
}

export default Component;
