import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqk1cmb9r.css';
import '../../css/n/nqlwmj21u.css';
import '../../css/n/ne9n9bcpk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vqk1cmb9r"/><path class="nqlwmj21u"/><path class="ne9n9bcpk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:water-treatment-20-bold"} {...others} />);
}

export default Component;
