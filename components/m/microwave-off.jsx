import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n0b8t0b6q.css';
import '../../css/e/ema0junej.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n0b8t0b6q"/><path class="ema0junej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:microwave-off"} {...others} />);
}

export default Component;
