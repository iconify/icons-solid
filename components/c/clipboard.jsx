import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f21qdeb7h.css';
import '../../css/s/s5lpn11ei.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f21qdeb7h"/><rect class="s5lpn11ei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:clipboard"} {...others} />);
}

export default Component;
