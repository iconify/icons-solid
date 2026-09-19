import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lwivuzb_u.css';
import '../../css/e/ehbqml5ic.css';
import '../../css/m/m_cyn06nd.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><circle class="lwivuzb_u"/><circle class="ehbqml5ic"/><circle class="m_cyn06nd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:dots-y"} {...others} />);
}

export default Component;
