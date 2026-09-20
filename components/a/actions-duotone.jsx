import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k0cp3tg0q.css';
import '../../css/e/e4ua-gbce.css';
import '../../css/k/k0cm-0j9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k0cp3tg0q"/><path class="e4ua-gbce"/><path class="k0cm-0j9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:actions-duotone"} {...others} />);
}

export default Component;
