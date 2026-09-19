import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yvmqnuunv.css';
import '../../css/d/dl8fp7w2g.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="yvmqnuunv"/><path class="dl8fp7w2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:rvn"} {...others} />);
}

export default Component;
