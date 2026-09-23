import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g62-gybbi.css';
import '../../css/p/pl94hcwzq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g62-gybbi"/><path class="pl94hcwzq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:monitor-sparkles"} {...others} />);
}

export default Component;
