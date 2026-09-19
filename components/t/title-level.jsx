import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/v/vvq0i9b7z.css';
import '../../css/g/gzw708umu.css';
import '../../css/m/mqnfj0biv.css';
import '../../css/i/i36jpfazz.css';
import '../../css/v/vhf8g-7jc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="vvq0i9b7z"/><path class="gzw708umu"/><path class="mqnfj0biv"/><path class="i36jpfazz"/><path class="vhf8g-7jc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:title-level"} {...others} />);
}

export default Component;
