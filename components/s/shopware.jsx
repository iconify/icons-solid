import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/piz0fn1_w.css';
import '../../css/y/yqacr5idm.css';
import '../../css/a/auwbk5w3x.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="piz0fn1_w"><path class="yqacr5idm"/><path class="auwbk5w3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:shopware"} {...others} />);
}

export default Component;
