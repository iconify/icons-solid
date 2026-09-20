import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/t/tk4g5-bhb.css';
import '../../css/k/kbtc9ac4m.css';
import '../../css/x/xpdxhmb7h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="tk4g5-bhb"/><path class="kbtc9ac4m"/><path class="xpdxhmb7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:designmoo-logo"} {...others} />);
}

export default Component;
