import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/m/mqzqakfat.css';
import '../../css/y/y7a_ch3ra.css';
import '../../css/p/p8tliqydp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="mqzqakfat"/><path class="y7a_ch3ra"/><path class="p8tliqydp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:local-pin"} {...others} />);
}

export default Component;
