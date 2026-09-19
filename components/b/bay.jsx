import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p9mxaxkea.css';
import '../../css/j/j8pz7o4nx.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="p9mxaxkea"/><path class="j8pz7o4nx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:bay"} {...others} />);
}

export default Component;
