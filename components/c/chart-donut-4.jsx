import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xa2f_xblh.css';
import '../../css/g/gjzoqze8y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xa2f_xblh"/><path class="gjzoqze8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:chart-donut-4"} {...others} />);
}

export default Component;
