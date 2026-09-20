import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sw1u15auk.css';
import '../../css/y/yci9rb1mt.css';
import '../../css/n/n5-k2h8fg.css';
import '../../css/p/pzr5cxfbm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sw1u15auk"/><path class="yci9rb1mt"/><path clip-rule="evenodd" class="n5-k2h8fg"/><path class="pzr5cxfbm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:earbuds-filled"} {...others} />);
}

export default Component;
