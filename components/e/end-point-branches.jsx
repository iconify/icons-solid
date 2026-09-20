import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/le0gmvb7l.css';
import '../../css/z/za-ab5tpq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="le0gmvb7l"/><path class="za-ab5tpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:end-point-branches"} {...others} />);
}

export default Component;
