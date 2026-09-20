import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p8hy2qb_s.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/d/d6cagkb6k.css';
import '../../css/q/qx33z3jup.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p8hy2qb_s"/><circle class="h_tsn8bxt"/><path class="d6cagkb6k"/><path class="qx33z3jup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:target-arrow"} {...others} />);
}

export default Component;
