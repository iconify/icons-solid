import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jf3j1xb6c.css';
import '../../css/r/rzzzpmivf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jf3j1xb6c"/><path class="rzzzpmivf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:award-fill"} {...others} />);
}

export default Component;
