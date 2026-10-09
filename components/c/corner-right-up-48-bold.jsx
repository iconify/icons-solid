import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/liyswgvjl.css';
import '../../css/o/or_bkw-qe.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="liyswgvjl"/><path class="or_bkw-qe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corner-right-up-48-bold"} {...others} />);
}

export default Component;
