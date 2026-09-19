import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5p0wubvd.css';
import '../../css/v/v230kntxc.css';
import '../../css/s/s0ipvyb2o.css';
import '../../css/t/td_8ombsx.css';
import '../../css/u/uf1a92b4r.css';
import '../../css/d/dw8wazx1r.css';
import '../../css/j/j-pmiab7w.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yzav82jaa.css';
import '../../css/s/shzx9ib5h.css';
import '../../css/t/tcfbe2eti.css';

const viewBox = {"width":102,"height":102};
const content = `<defs><path id="SVGmzXNO21H" class="s5p0wubvd"/></defs><circle class="v230kntxc"/><circle class="s0ipvyb2o"/><path class="td_8ombsx"/><path clip-rule="evenodd" class="uf1a92b4r"/><path class="dw8wazx1r"/><path clip-rule="evenodd" class="j-pmiab7w"/><use href="#SVGmzXNO21H" clip-rule="evenodd" class="d2kvgvbvc"/><path clip-rule="evenodd" class="yzav82jaa"/><use href="#SVGmzXNO21H" clip-rule="evenodd" class="d2kvgvbvc"/><path class="shzx9ib5h"/><path class="tcfbe2eti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:goal"} {...others} />);
}

export default Component;
