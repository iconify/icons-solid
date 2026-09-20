import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/f/fym6f7rbw.css';
import '../../css/y/yov4iwbpc.css';
import '../../css/p/pljjx4b4c.css';
import '../../css/l/lylay1e2a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="fym6f7rbw"/><path class="yov4iwbpc"/><path class="pljjx4b4c"/><path class="lylay1e2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:nintendo-xbox-controller-1"} {...others} />);
}

export default Component;
