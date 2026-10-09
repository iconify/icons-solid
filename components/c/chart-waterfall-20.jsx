import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aem9n2zvr.css';
import '../../css/u/ubsqc0zyi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aem9n2zvr"/><path class="ubsqc0zyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-waterfall-20"} {...others} />);
}

export default Component;
