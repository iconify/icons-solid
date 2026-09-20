import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5xdmn.css';
import '../../css/t/tt3b6d.css';
import '../../css/z/zxndow.css';
import '../../css/s/s9nboe.css';
import '../../css/d/dr_qeu.css';
import '../../css/x/xui0lb.css';
import '../../css/q/qic6az.css';
import '../../css/s/snke8u.css';
import '../../css/o/oxx-om.css';
import '../../css/v/v6gwkv.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-14.css';
import '../../css/s/so-to-0.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2px.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGId2nRbiQ"><path class="c5xdmn tt3b6d zxndow"/><path class="c5xdmn s9nboe zxndow"/><circle class="dr_qeu xui0lb"/><circle class="dr_qeu qic6az"/><circle class="dr_qeu snke8u"/><path class="c5xdmn oxx-om v6gwkv"/></mask></defs><path mask="url(#SVGId2nRbiQ)" class="botfzx"/><path class="c5xdmn gd_4-q v6gwkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:mushroom-off"} {...others} />);
}

export default Component;
