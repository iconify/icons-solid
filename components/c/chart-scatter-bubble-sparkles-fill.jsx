import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yc13qrljd.css';
import '../../css/b/bvxu11eox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yc13qrljd"/><path class="bvxu11eox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-scatter-bubble-sparkles-fill"} {...others} />);
}

export default Component;
