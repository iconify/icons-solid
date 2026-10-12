import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n6rvu93np.css';
import '../../css/y/yu2pl9xbr.css';
import '../../css/z/z_aw5vbcy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n6rvu93np"/><path class="yu2pl9xbr"/><path class="z_aw5vbcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-lock-20"} {...others} />);
}

export default Component;
