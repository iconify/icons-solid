import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/imw18uqpy.css';
import '../../css/i/ijr721b7b.css';
import '../../css/q/qhj_yo_sl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="imw18uqpy"/><path clip-rule="evenodd" class="ijr721b7b"/><path class="qhj_yo_sl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:lark-one"} {...others} />);
}

export default Component;
