import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h6p28il0s.css';
import '../../css/f/f4res6apk.css';
import '../../css/i/i9m88b5ko.css';
import '../../css/x/xyvq88qxl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h6p28il0s"/><path class="f4res6apk"/><path class="i9m88b5ko"/><path class="xyvq88qxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:chart-radar"} {...others} />);
}

export default Component;
