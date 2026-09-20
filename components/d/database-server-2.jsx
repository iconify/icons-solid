import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/w/wrabl-blb.css';
import '../../css/u/ucwu-ui-i.css';
import '../../css/d/djs-grbxn.css';
import '../../css/n/nap9b3bla.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="wrabl-blb"/><path class="ucwu-ui-i"/><path class="djs-grbxn"/><path class="nap9b3bla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:database-server-2"} {...others} />);
}

export default Component;
