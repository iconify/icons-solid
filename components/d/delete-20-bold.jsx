import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-p6gpbin.css';
import '../../css/d/dnun0_bjo.css';
import '../../css/m/mldtn5bcy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i-p6gpbin"/><path class="dnun0_bjo"/><path class="mldtn5bcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:delete-20-bold"} {...others} />);
}

export default Component;
