import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/u/ut61smpvp.css';
import '../../css/y/yjeye1b2k.css';
import '../../css/a/a1x4rgbfd.css';
import '../../css/d/dfqawdl-z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="ut61smpvp"/><path class="yjeye1b2k"/><path clip-rule="evenodd" class="a1x4rgbfd"/><path clip-rule="evenodd" class="dfqawdl-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pure-natural"} {...others} />);
}

export default Component;
