import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v33ei8qyr.css';
import '../../css/e/eu2fnio2o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v33ei8qyr"/><path class="eu2fnio2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:leaf"} {...others} />);
}

export default Component;
