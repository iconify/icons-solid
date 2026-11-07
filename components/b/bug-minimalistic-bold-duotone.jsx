import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yh6qkgb3l.css';
import '../../css/m/mykbgq6ti.css';
import '../../css/l/ld4v_1bpj.css';
import '../../css/b/beioclbnn.css';
import '../../css/u/ubw9lrqfo.css';
import '../../css/k/kb1w5lbna.css';
import '../../css/m/mzoswnb5f.css';
import '../../css/h/hsu_hbyix.css';
import '../../css/d/d-gz77bpa.css';
import '../../css/t/tha2i9bit.css';
import '../../css/k/kb3e9gbfd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yh6qkgb3l"/><path class="mykbgq6ti"/><path class="ld4v_1bpj"/><path class="beioclbnn"/><path class="ubw9lrqfo"/><path class="kb1w5lbna"/><path class="mzoswnb5f"/><path class="hsu_hbyix"/><path class="d-gz77bpa"/><path class="tha2i9bit"/><path class="kb3e9gbfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bug-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
