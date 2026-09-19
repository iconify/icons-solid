import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l066leb1a.css';
import '../../css/n/nzyxeshnx.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="l066leb1a"/><path class="nzyxeshnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:exmo"} {...others} />);
}

export default Component;
