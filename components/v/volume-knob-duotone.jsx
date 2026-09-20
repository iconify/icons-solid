import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m45zbqb6j.css';
import '../../css/i/ih8q-mbdd.css';
import '../../css/l/lv496ujfj.css';
import '../../css/g/gb8nttfvj.css';
import '../../css/z/ze16glwgc.css';
import '../../css/e/e5kb0w1sr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="m45zbqb6j"/><path class="ih8q-mbdd"/><path class="lv496ujfj"/><path class="gb8nttfvj"/><path class="ze16glwgc"/><path class="e5kb0w1sr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:volume-knob-duotone"} {...others} />);
}

export default Component;
