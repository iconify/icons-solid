import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lbjm81b0y.css';
import '../../css/j/jr-udybsq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lbjm81b0y"/><path class="jr-udybsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:gallery-horizontal-fill"} {...others} />);
}

export default Component;
