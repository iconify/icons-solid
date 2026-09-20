import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lbydh0fwo.css';
import '../../css/y/yo50hku1m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lbydh0fwo"/><path class="yo50hku1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-column-stacked-fill"} {...others} />);
}

export default Component;
