import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/i/iado6mbxh.css';
import '../../css/v/v7ujccbmb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="iado6mbxh"/><path class="v7ujccbmb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:tag"} {...others} />);
}

export default Component;
