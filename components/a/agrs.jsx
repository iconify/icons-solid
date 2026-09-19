import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nc-z6cbpx.css';
import '../../css/r/rmv9yblnu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="nc-z6cbpx"/><path class="rmv9yblnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:agrs"} {...others} />);
}

export default Component;
