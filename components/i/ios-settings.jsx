import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/drttxikxo.css';
import '../../css/c/cr3ta5bbg.css';
import '../../css/p/p9-zrkb4g.css';
import '../../css/g/guewfbcxi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="drttxikxo"/><path class="cr3ta5bbg"/><path class="p9-zrkb4g"/><path class="guewfbcxi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:ios-settings"} {...others} />);
}

export default Component;
