import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sjrttvbqp.css';
import '../../css/e/e_5zefb7o.css';
import '../../css/o/oiiosactn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sjrttvbqp"/><path class="e_5zefb7o"/><path class="oiiosactn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cliff-jumping"} {...others} />);
}

export default Component;
