import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/l/lbsc7q7-t.css';
import '../../css/b/b2yr8cd2a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="lbsc7q7-t"/><path class="b2yr8cd2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:volume-max-outline"} {...others} />);
}

export default Component;
