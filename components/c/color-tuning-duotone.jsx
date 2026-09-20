import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ca6l3jo0i.css';
import '../../css/k/k0dgbfb8l.css';
import '../../css/e/ekwdemmlb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ca6l3jo0i"/><path class="k0dgbfb8l"/><path class="ekwdemmlb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:color-tuning-duotone"} {...others} />);
}

export default Component;
