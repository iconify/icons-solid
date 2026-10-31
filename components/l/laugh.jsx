import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/d/d6kg_nb4c.css';
import '../../css/w/wjvj2cbdi.css';
import '../../css/g/g_ic7mb0e.css';
import '../../css/c/cgadf3bdd.css';
import '../../css/e/e60bxztwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="d6kg_nb4c"/><path class="wjvj2cbdi"/><path class="g_ic7mb0e"/><path class="cgadf3bdd"/><path class="e60bxztwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:laugh"} {...others} />);
}

export default Component;
