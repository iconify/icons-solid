import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0vjpuw4g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o0vjpuw4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:percent-20"} {...others} />);
}

export default Component;
