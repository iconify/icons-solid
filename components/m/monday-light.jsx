import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogo13fy2m.css';
import '../../css/x/x32nqibwz.css';
import '../../css/n/nn2rpubji.css';
import '../../css/p/pp9e_nbfw.css';
import '../../css/b/bczueohzd.css';

const viewBox = {"width":467,"height":85};
const content = `<g transform="translate(0 1.292)scale(3.69565)"><path class="ogo13fy2m"/><path class="x32nqibwz"/><circle class="nn2rpubji"/></g><path class="pp9e_nbfw"/><path clip-rule="evenodd" class="bczueohzd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:monday-light"} {...others} />);
}

export default Component;
