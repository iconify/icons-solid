import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/t/ttiwe0-8s.css';
import '../../css/h/hvm0-wb1w.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="ttiwe0-8s"/><path class="hvm0-wb1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:powr"} {...others} />);
}

export default Component;
