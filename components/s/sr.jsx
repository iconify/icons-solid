import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w0pzrtb-f.css';
import '../../css/q/qhsk7nn5g.css';
import '../../css/q/qfznpkbpj.css';
import '../../css/c/c4dscyzks.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="w0pzrtb-f"/><path class="qhsk7nn5g"/><path class="qfznpkbpj"/><path class="c4dscyzks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:sr"} {...others} />);
}

export default Component;
