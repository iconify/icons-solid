import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezfumgw-x.css';
import '../../css/x/xf22utbom.css';
import '../../css/w/wu2wg8b9y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ezfumgw-x"><path class="xf22utbom"/><path class="wu2wg8b9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:peace-symbol"} {...others} />);
}

export default Component;
