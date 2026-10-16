import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pcia1ds6l.css';
import '../../css/i/istrjj4et.css';
import '../../css/y/y06ocpbjt.css';
import '../../css/p/pw9j91bwy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pcia1ds6l"/><path class="istrjj4et"/><path class="y06ocpbjt"/><path class="pw9j91bwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hazard-environment-20-bold"} {...others} />);
}

export default Component;
