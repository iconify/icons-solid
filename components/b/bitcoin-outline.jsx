import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/d/du5ugufva.css';
import '../../css/x/xdxgcd4hh.css';
import '../../css/u/ui44u43fe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="du5ugufva"/><path class="xdxgcd4hh"/><path class="ui44u43fe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:bitcoin-outline"} {...others} />);
}

export default Component;
