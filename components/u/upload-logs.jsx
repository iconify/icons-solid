import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/k/kdn8v93fz.css';
import '../../css/f/ftz4guzir.css';
import '../../css/h/h4e270blp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="kdn8v93fz"/><path class="ftz4guzir"/><path class="h4e270blp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:upload-logs"} {...others} />);
}

export default Component;
