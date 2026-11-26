import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l21zrlb0u.css';
import '../../css/z/z-o29tuwp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l21zrlb0u"/><rect class="z-o29tuwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:monitor-smartphone"} {...others} />);
}

export default Component;
