import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dt0dymb4x.css';
import '../../css/e/e6y366yhr.css';
import '../../css/v/v8ujeyanp.css';
import '../../css/w/way_ribfj.css';
import '../../css/t/t6c22ib-r.css';
import '../../css/k/k1xpd-b6l.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="dt0dymb4x"/><path class="e6y366yhr"/><path class="v8ujeyanp"/><circle class="way_ribfj"/><path class="t6c22ib-r"/><path class="k1xpd-b6l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:et"} {...others} />);
}

export default Component;
