import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sy5d6nb3h.css';
import '../../css/g/glxqgygip.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sy5d6nb3h"/><path class="glxqgygip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-apple-arcade"} {...others} />);
}

export default Component;
