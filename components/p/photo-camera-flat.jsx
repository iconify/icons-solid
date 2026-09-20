import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aaivvlwtu.css';
import '../../css/k/k3x-hgh8w.css';
import '../../css/z/z2twfaidd.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="aaivvlwtu"/><path clip-rule="evenodd" class="k3x-hgh8w"/><path class="z2twfaidd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:photo-camera-flat"} {...others} />);
}

export default Component;
