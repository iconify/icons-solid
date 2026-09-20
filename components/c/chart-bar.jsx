import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mt-pin3gu.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/b/bw2p-ubhh.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGvfUnedaT" class="mt-pin3gu"/></defs><g class="ft5dv1b6b"><use href="#SVGvfUnedaT"/><use href="#SVGvfUnedaT" class="p_3zmsvya"/><path class="bw2p-ubhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:chart-bar"} {...others} />);
}

export default Component;
