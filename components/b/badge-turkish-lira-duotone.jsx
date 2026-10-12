import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g79xbo1hg.css';
import '../../css/i/ijgp7yb3n.css';
import '../../css/f/fbyge-9ve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g79xbo1hg"/><path class="ijgp7yb3n"/><path class="fbyge-9ve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:badge-turkish-lira-duotone"} {...others} />);
}

export default Component;
