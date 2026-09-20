import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m4a2kvqoa.css';
import '../../css/b/b2zmada3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="m4a2kvqoa"/><path class="b2zmada3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:inner-shadow-bottom"} {...others} />);
}

export default Component;
