import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wx5f7pbww.css';
import '../../css/t/ts1pu0k0u.css';
import '../../css/g/ggitv5baf.css';
import '../../css/c/c-ft4ac1m.css';
import '../../css/u/unnckdb3w.css';
import '../../css/w/wvb_bk-rb.css';
import '../../css/d/dphmrsbca.css';
import '../../css/x/xj8tkwl9n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="wx5f7pbww"/><path class="ts1pu0k0u"/><path class="ggitv5baf"/><path class="c-ft4ac1m"/><path class="unnckdb3w"/><path class="wvb_bk-rb"/><path class="dphmrsbca"/><path class="xj8tkwl9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:christmas-tree"} {...others} />);
}

export default Component;
