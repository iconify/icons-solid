import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p9o2-wbil.css';
import '../../css/e/eahryx7ia.css';
import '../../css/o/oqrkd9wvk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p9o2-wbil"/><path clip-rule="evenodd" class="eahryx7ia"/><path class="oqrkd9wvk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:visual-blind-flat"} {...others} />);
}

export default Component;
