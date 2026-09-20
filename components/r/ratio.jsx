import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e1rvo-bmo.css';
import '../../css/n/n7c21daap.css';
import '../../css/z/zqmr0xbnf.css';
import '../../css/h/hlh_trbch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="e1rvo-bmo"/><path class="n7c21daap"/><path class="zqmr0xbnf"/><path class="hlh_trbch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:ratio"} {...others} />);
}

export default Component;
