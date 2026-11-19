import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hec4_bb-a.css';
import '../../css/d/d-2w6k7xp.css';
import '../../css/c/ct-sjcc7t.css';
import '../../css/o/ok9hogs-n.css';
import '../../css/o/ovaqii3zz.css';
import '../../css/u/uwy6n1bqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hec4_bb-a"/><path class="d-2w6k7xp"/><path class="ct-sjcc7t"/><ellipse class="ok9hogs-n"/><ellipse class="ovaqii3zz"/><path class="uwy6n1bqk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:coin-swap"} {...others} />);
}

export default Component;
