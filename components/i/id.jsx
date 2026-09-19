import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k83jpvbjp.css';
import '../../css/x/x5rt7xbfv.css';
import '../../css/p/p9j8izb5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="k83jpvbjp"/><path class="x5rt7xbfv"/><path class="p9j8izb5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:id"} {...others} />);
}

export default Component;
