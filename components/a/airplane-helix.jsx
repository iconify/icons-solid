import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufie9ebgy.css';
import '../../css/g/guewfbcxi.css';
import '../../css/f/f4er-0bna.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ufie9ebgy"><path class="guewfbcxi"/><path clip-rule="evenodd" class="f4er-0bna"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:airplane-helix"} {...others} />);
}

export default Component;
