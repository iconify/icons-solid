import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/o/o8o5xp5ok.css';
import '../../css/b/bibijobzs.css';
import '../../css/y/yzreu6pwo.css';
import '../../css/o/o3zfdisfw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="o8o5xp5ok"/><path class="bibijobzs"/><path class="yzreu6pwo"/><path class="o3zfdisfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:pregnant-women"} {...others} />);
}

export default Component;
