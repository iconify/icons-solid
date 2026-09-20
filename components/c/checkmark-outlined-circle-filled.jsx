import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/k/kvn14gsjy.css';
import '../../css/g/gjsii3f9x.css';
import '../../css/p/p3aw6_brk.css';
import '../../css/v/v2e3hkb9g.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="ft5dv1b6b"><defs><mask id="SVG8BSlCDaW"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="gjsii3f9x"/><path class="p3aw6_brk"/><path class="v2e3hkb9g"/></g></mask></defs><circle mask="url(#SVG8BSlCDaW)" class="bd9gczbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:checkmark-outlined-circle-filled"} {...others} />);
}

export default Component;
