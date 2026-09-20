import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ia4qhfxyu.css';
import '../../css/w/wqhnb6rty.css';
import '../../css/y/yn9vwmsxf.css';
import '../../css/b/b4tqxxbyg.css';
import '../../css/q/q04i72bzl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ia4qhfxyu"/><path clip-rule="evenodd" class="wqhnb6rty"/><path class="yn9vwmsxf"/><path class="b4tqxxbyg"/><path class="q04i72bzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:webcam-duo"} {...others} />);
}

export default Component;
