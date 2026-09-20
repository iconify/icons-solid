import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s0co2bgmi.css';
import '../../css/w/wy4um0b5j.css';
import '../../css/c/cvda4g95f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="s0co2bgmi"/><path clip-rule="evenodd" class="wy4um0b5j"/><path clip-rule="evenodd" class="cvda4g95f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:location-pin-3-flat"} {...others} />);
}

export default Component;
