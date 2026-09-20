import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p4gh0oh5n.css';
import '../../css/u/uee9bdb6t.css';
import '../../css/m/m-ewcbc_c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="p4gh0oh5n"/><path clip-rule="evenodd" class="uee9bdb6t"/><path class="m-ewcbc_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:graph-up2"} {...others} />);
}

export default Component;
