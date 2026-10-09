import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/brqvmbc5r.css';
import '../../css/f/fbs_2vnbi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="brqvmbc5r"/><path class="fbs_2vnbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:coins-20"} {...others} />);
}

export default Component;
