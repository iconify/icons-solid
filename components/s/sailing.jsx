import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/v/varruxceu.css';
import '../../css/k/k64kodbrc.css';
import '../../css/e/ewyb6cc0i.css';
import '../../css/w/w30ktoplr.css';
import '../../css/c/cgtu72bsp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="varruxceu"/><path class="k64kodbrc"/><path class="ewyb6cc0i"/><path class="w30ktoplr"/><path class="cgtu72bsp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sailing"} {...others} />);
}

export default Component;
