import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5xdmn.css';
import '../../css/v/vums4r.css';
import '../../css/g/g26hbu.css';
import '../../css/u/u6fdno.css';
import '../../css/l/lx2oxu.css';
import '../../css/g/gq-uqf.css';
import '../../css/d/djbuks.css';
import '../../css/t/th60ya.css';
import '../../css/p/p1sxmm.css';
import '../../css/b/botfzx.css';
import '../../css/m/mrw6sz.css';
import '../../css/s/so-from-56.css';
import '../../css/f/fade-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGA3O50HBc"><path class="c5xdmn vums4r"/><circle class="g26hbu u6fdno"/><circle class="g26hbu lx2oxu"/><circle class="g26hbu gq-uqf"/><circle class="djbuks g26hbu"/><circle class="g26hbu th60ya"/><path class="p1sxmm"/></mask></defs><path mask="url(#SVGA3O50HBc)" class="botfzx"/><path class="c5xdmn mrw6sz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:cookie-check"} {...others} />);
}

export default Component;
