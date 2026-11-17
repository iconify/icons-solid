import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oupujh1tx.css';
import '../../css/g/g36t2-bad.css';
import '../../css/o/oaczw2b9c.css';
import '../../css/n/nonfo6b0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oupujh1tx"/><path class="g36t2-bad"/><path class="oaczw2b9c"/><path class="nonfo6b0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cheese-duotone"} {...others} />);
}

export default Component;
