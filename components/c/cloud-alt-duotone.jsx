import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/as7wynzmz.css';
import '../../css/r/rzineglrc.css';
import '../../css/g/gptpctb9i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="as7wynzmz"/><path class="rzineglrc"/><path class="gptpctb9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:cloud-alt-duotone"} {...others} />);
}

export default Component;
