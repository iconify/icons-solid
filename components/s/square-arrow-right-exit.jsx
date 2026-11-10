import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ewty_0bgi.css';
import '../../css/o/od1_pacpq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ewty_0bgi"/><path class="od1_pacpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:square-arrow-right-exit"} {...others} />);
}

export default Component;
