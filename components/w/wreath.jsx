import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/l/l92gp4bum.css';
import '../../css/a/a-hmjzbcq.css';
import '../../css/w/wxac6ccpc.css';
import '../../css/v/v-787n_1k.css';
import '../../css/h/h9hqozbfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="l92gp4bum"/><path class="a-hmjzbcq wm-shine"/><path class="wm-k wxac6ccpc"/><path class="v-787n_1k wm-a"/><path class="h9hqozbfx wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:wreath"} {...others} />);
}

export default Component;
