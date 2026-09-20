import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/do_u7wljd.css';
import '../../css/f/f50bkxkxz.css';
import '../../css/f/frprfzvzu.css';
import '../../css/l/lld3lbcdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="do_u7wljd"/><path class="f50bkxkxz"/><path class="frprfzvzu"/><path class="lld3lbcdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:global-learning-flat"} {...others} />);
}

export default Component;
