import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kjbr0ef4z.css';
import '../../css/l/lh8muo0pg.css';
import '../../css/q/qi74fim5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kjbr0ef4z"/><path class="lh8muo0pg"/><path class="qi74fim5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:fuel"} {...others} />);
}

export default Component;
