import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ucdqj-bas.css';
import '../../css/m/m3g3pfn4y.css';
import '../../css/m/m2qxt-bpd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ucdqj-bas"/><path class="m3g3pfn4y"/><path class="m2qxt-bpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:images-20"} {...others} />);
}

export default Component;
