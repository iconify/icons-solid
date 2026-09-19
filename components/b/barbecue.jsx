import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/l/lkvav80xe.css';
import '../../css/r/rjxpy-bck.css';
import '../../css/t/t5z5mjwvr.css';
import '../../css/b/brp37w8bb.css';
import '../../css/w/wb9etgbcy.css';
import '../../css/m/m-k5vdboq.css';
import '../../css/s/srcae3bcr.css';
import '../../css/e/eujao83su.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><rect class="lkvav80xe"/><rect class="rjxpy-bck"/><line x1="16" x2="16" y1="31" y2="44"/><rect class="t5z5mjwvr"/><rect class="brp37w8bb"/><line x1="32" x2="32" y1="31" y2="44"/><path class="wb9etgbcy"/><path class="m-k5vdboq"/><path class="srcae3bcr"/><path class="eujao83su"/><line x1="16" x2="16" y1="14" y2="20"/><line x1="32" x2="32" y1="14" y2="20"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:barbecue"} {...others} />);
}

export default Component;
