import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5xdmn.css';
import '../../css/q/qugfui.css';
import '../../css/w/w2_ztl.css';
import '../../css/b/b68w5t.css';
import '../../css/b/botfzx.css';
import '../../css/j/jlhoox.css';
import '../../css/d/d-h_4q1i.css';
import '../../css/d/d-p1bg5r.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-cqmtvg.css';
import '../../css/s/so-to-0.css';
import '../../css/d/d-_ufr0f.css';
import '../../css/d/d-_hat9q.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGan5qtd5H"><path class="c5xdmn qugfui"/><circle class="w2_ztl"/><path class="b68w5t c5xdmn"/></mask></defs><path mask="url(#SVGan5qtd5H)" class="botfzx"/><path class="c5xdmn jlhoox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:watch-off-loop"} {...others} />);
}

export default Component;
