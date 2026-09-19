import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/t/tpe2g3bph.css';
import '../../css/o/ok7d4xmgm.css';
import '../../css/f/f-ggwcm5f.css';
import '../../css/y/ye513-row.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="tpe2g3bph"/><rect class="ok7d4xmgm"/><path class="f-ggwcm5f"/><path class="ye513-row"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:newlybuild"} {...others} />);
}

export default Component;
