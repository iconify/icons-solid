import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xy7xqk_um.css';
import '../../css/x/xp2kcen4h.css';
import '../../css/t/tou7l3b1z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xy7xqk_um"/><path class="xp2kcen4h"/><path class="tou7l3b1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:film-48-bold"} {...others} />);
}

export default Component;
