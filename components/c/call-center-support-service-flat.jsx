import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u67630dio.css';
import '../../css/w/wcduh8b5o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="u67630dio"/><path clip-rule="evenodd" class="wcduh8b5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:call-center-support-service-flat"} {...others} />);
}

export default Component;
