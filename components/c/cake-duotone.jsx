import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w6-9ocequ.css';
import '../../css/b/bjcuo61ot.css';
import '../../css/k/k_4lfsbqx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w6-9ocequ"/><path class="bjcuo61ot"/><path class="k_4lfsbqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cake-duotone"} {...others} />);
}

export default Component;
