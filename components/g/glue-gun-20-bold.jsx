import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6h9w5hey.css';
import '../../css/s/sn5c15bsv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f6h9w5hey"/><path class="sn5c15bsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:glue-gun-20-bold"} {...others} />);
}

export default Component;
