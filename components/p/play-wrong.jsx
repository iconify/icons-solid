import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/r/r2704obmd.css';
import '../../css/x/xy1j02b6l.css';
import '../../css/h/hbnt5jbau.css';
import '../../css/c/crk1s8bim.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="r2704obmd"/><path class="xy1j02b6l"/><path class="hbnt5jbau"/><path class="crk1s8bim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:play-wrong"} {...others} />);
}

export default Component;
