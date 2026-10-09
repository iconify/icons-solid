import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kko00cc3q.css';
import '../../css/f/fpxrp7fka.css';
import '../../css/e/e_u3u9v2b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kko00cc3q"/><path class="fpxrp7fka"/><path class="e_u3u9v2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:district-heating-20"} {...others} />);
}

export default Component;
