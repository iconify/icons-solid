import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5xdmn.css';
import '../../css/o/ocdart.css';
import '../../css/z/zxndow.css';
import '../../css/t/ttlnxo.css';
import '../../css/t/t11kpj.css';
import '../../css/i/ixkhpy.css';
import '../../css/o/oxx-om.css';
import '../../css/p/plzspp.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-54.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-ssqjbr.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGTlR9zcnX"><path class="c5xdmn ocdart zxndow"/><path class="ttlnxo"/><path class="c5xdmn t11kpj zxndow"/><path class="c5xdmn ixkhpy zxndow"/><path class="c5xdmn oxx-om plzspp"/></mask></defs><path mask="url(#SVGTlR9zcnX)" class="botfzx"/><path class="c5xdmn gd_4-q plzspp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:chat-round-alert-off"} {...others} />);
}

export default Component;
