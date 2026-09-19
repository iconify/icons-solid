import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kxvvz6jiy.css';
import '../../css/c/c_v1vmbxo.css';
import '../../css/k/kev1szbzf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kxvvz6jiy"/><path class="c_v1vmbxo"/><path class="kev1szbzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:rss"} {...others} />);
}

export default Component;
