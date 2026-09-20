import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y12majbve.css';
import '../../css/c/c-bbfqb3b.css';
import '../../css/h/hjvj7kb-a.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/j/js4i2vszx.css';
import '../../css/b/b6vb_rrtr.css';
import '../../css/t/tvxiapa3j.css';
import '../../css/n/nb-smibyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="y12majbve"/><path class="c-bbfqb3b"/><path class="hjvj7kb-a"/><g class="mc2zb0bvp"><path class="js4i2vszx"/><path class="b6vb_rrtr"/><path class="tvxiapa3j"/><path class="nb-smibyj"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:skateboarding-bold-duotone"} {...others} />);
}

export default Component;
