import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/k/ku9puhebm.css';
import '../../css/t/tfpn3_biv.css';
import '../../css/t/tuhqmybxv.css';
import '../../css/y/yjbohzbge.css';
import '../../css/v/va4dlfb1f.css';
import '../../css/z/zart_y1vx.css';
import '../../css/o/o0029hbkh.css';
import '../../css/a/anidsrboh.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="ku9puhebm"/><path class="tfpn3_biv"/><path class="tuhqmybxv"/><path class="yjbohzbge"/><path class="va4dlfb1f"/><path class="zart_y1vx"/><path class="o0029hbkh"/><path class="anidsrboh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:mz"} {...others} />);
}

export default Component;
