import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqa3tkb1n.css';
import '../../css/f/fer1ldbeb.css';
import '../../css/c/c-r_9wbsc.css';
import '../../css/m/mqn03ibrr.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="fer1ldbeb"/><path class="c-r_9wbsc"/><path class="mqn03ibrr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:graduation-cap-solid"} {...others} />);
}

export default Component;
