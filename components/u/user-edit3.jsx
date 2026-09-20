import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fgm_w0bnd.css';
import '../../css/r/ruoobvlrj.css';
import '../../css/p/p552hfbgz.css';
import '../../css/l/lw_yxzo-w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fgm_w0bnd"/><path class="ruoobvlrj"/><path class="p552hfbgz"/><path class="lw_yxzo-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:user-edit3"} {...others} />);
}

export default Component;
