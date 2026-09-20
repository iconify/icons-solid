import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/le1d4bcqy.css';
import '../../css/c/c-jy6ibsi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="le1d4bcqy"/><path class="c-jy6ibsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:fragile"} {...others} />);
}

export default Component;
