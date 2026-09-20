import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w-x5jbb0q.css';
import '../../css/y/yo50hku1m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w-x5jbb0q"/><path class="yo50hku1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-bar-stacked-fill"} {...others} />);
}

export default Component;
