import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eusm4q.css';
import '../../css/k/kilinm.css';
import '../../css/t/t5pxry.css';
import '../../css/k/k50i_c.css';
import '../../css/c/c651wi.css';
import '../../css/o/oxx-om.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-62.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-_-jasl.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGcufG5bmq"><path class="eusm4q kilinm t5pxry"/><path class="eusm4q k50i_c t5pxry"/><path class="c651wi oxx-om t5pxry"/></mask></defs><path mask="url(#SVGcufG5bmq)" class="botfzx"/><path class="c651wi gd_4-q t5pxry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:file-off-twotone"} {...others} />);
}

export default Component;
