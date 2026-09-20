import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rx9sfhb0h.css';
import '../../css/u/u3tke38bu.css';
import '../../css/y/ybpq_2f7g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rx9sfhb0h"/><path class="u3tke38bu"/><path class="ybpq_2f7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:chart-ring"} {...others} />);
}

export default Component;
