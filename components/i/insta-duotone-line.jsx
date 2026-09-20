import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y06121bln.css';
import '../../css/q/qc3x1gn8n.css';
import '../../css/k/k0evexoqr.css';
import '../../css/o/o55rtrbry.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y06121bln"/><path class="qc3x1gn8n"/><circle class="k0evexoqr"/><circle class="o55rtrbry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:insta-duotone-line"} {...others} />);
}

export default Component;
