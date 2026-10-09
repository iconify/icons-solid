import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hw4_rr5le.css';
import '../../css/a/ahqrd-o5z.css';
import '../../css/n/npeb0bbgi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hw4_rr5le"/><path class="ahqrd-o5z"/><path class="npeb0bbgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rcd-20"} {...others} />);
}

export default Component;
