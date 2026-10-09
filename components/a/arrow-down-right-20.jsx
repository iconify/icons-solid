import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p52u5b7hp.css';
import '../../css/l/l9thhtagt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p52u5b7hp"/><path class="l9thhtagt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-down-right-20"} {...others} />);
}

export default Component;
