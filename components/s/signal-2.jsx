import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/l/lkvah6bqa.css';
import '../../css/m/m-40v_byi.css';
import '../../css/b/bo7uaimwn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="lkvah6bqa"/><path class="m-40v_byi"/><path class="bo7uaimwn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:signal-2"} {...others} />);
}

export default Component;
