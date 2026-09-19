import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pw42tobks.css';
import '../../css/q/q7in6wbzr.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="pw42tobks"/><path class="q7in6wbzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:mds"} {...others} />);
}

export default Component;
