import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/afm76vb_a.css';
import '../../css/w/wl684zpen.css';
import '../../css/n/n_-i-of3v.css';
import '../../css/w/wuzazob5f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="afm76vb_a"/><path class="wl684zpen"/><path class="n_-i-of3v"/><path class="wuzazob5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mosque-48-bold"} {...others} />);
}

export default Component;
