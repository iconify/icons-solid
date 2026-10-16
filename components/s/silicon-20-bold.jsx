import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jpwlrrj0w.css';
import '../../css/v/vc4rurisx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jpwlrrj0w"/><path class="vc4rurisx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:silicon-20-bold"} {...others} />);
}

export default Component;
