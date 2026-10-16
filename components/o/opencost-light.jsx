import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hbz3qqjqe.css';
import '../../css/p/pk5z2qbjm.css';
import '../../css/r/rwhx1vbxb.css';
import '../../css/a/ae_2cvb0g.css';
import '../../css/e/ed9rmn8yk.css';
import '../../css/g/gx29lq4wf.css';
import '../../css/c/cz6khc3oi.css';

const viewBox = {"width":905,"height":822};
const content = `<g class="ft5dv1b6b"><path class="hbz3qqjqe"/><path class="pk5z2qbjm"/><path class="rwhx1vbxb"/><path class="ae_2cvb0g"/><path class="ed9rmn8yk"/><path class="gx29lq4wf"/><path class="cz6khc3oi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:opencost-light"} {...others} />);
}

export default Component;
