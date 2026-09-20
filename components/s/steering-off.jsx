import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w128kj.css';
import '../../css/c/c5xdmn.css';
import '../../css/m/m2hv7f.css';
import '../../css/z/zxndow.css';
import '../../css/x/xf_gao.css';
import '../../css/o/oxx-om.css';
import '../../css/u/ux4wzr.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/d/d-3fqnuo.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG3UnvhetV"><path class="w128kj"/><path class="c5xdmn m2hv7f zxndow"/><path class="c5xdmn xf_gao zxndow"/><path class="c5xdmn oxx-om ux4wzr"/></mask></defs><path mask="url(#SVG3UnvhetV)" class="botfzx"/><path class="c5xdmn gd_4-q ux4wzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:steering-off"} {...others} />);
}

export default Component;
