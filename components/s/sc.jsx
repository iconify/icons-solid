import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/ghadklplh.css';
import '../../css/r/r78dksxaf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="ghadklplh"/><path class="r78dksxaf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:sc"} {...others} />);
}

export default Component;
