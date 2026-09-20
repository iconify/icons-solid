import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/f/fokfcxb4l.css';
import '../../css/a/a3lh-lbdl.css';
import '../../css/a/a792p2b0d.css';
import '../../css/f/frtaaybdi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="fokfcxb4l"/><path class="a3lh-lbdl"/><path class="a792p2b0d"/><path class="frtaaybdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:glasses"} {...others} />);
}

export default Component;
