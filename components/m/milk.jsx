import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nprm3ac8a.css';
import '../../css/n/n1sxjmb4w.css';
import '../../css/l/lcefl6b8o.css';
import '../../css/c/cgda8mbuj.css';
import '../../css/t/tw5-qzb3b.css';
import '../../css/h/h5_irpkkq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="nprm3ac8a wm-shadow"/><path class="n1sxjmb4w"/><path class="lcefl6b8o"/><path class="cgda8mbuj"/><path class="tw5-qzb3b"/><path class="h5_irpkkq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:milk"} {...others} />);
}

export default Component;
