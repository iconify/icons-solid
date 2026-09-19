import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/g/ge2nuibdx.css';
import '../../css/k/kxea2dtzw.css';
import '../../css/e/etqay_9cb.css';
import '../../css/f/fbarwjfpg.css';
import '../../css/t/tlx99acho.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="ge2nuibdx"/><path class="kxea2dtzw"/><path class="etqay_9cb"/><path class="fbarwjfpg"/><path class="tlx99acho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:editor"} {...others} />);
}

export default Component;
