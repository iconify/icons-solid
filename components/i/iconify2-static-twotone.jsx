import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4vf-t.css';
import '../../css/r/r1menc.css';
import '../../css/z/zxndow.css';
import '../../css/k/kivj7d.css';
import '../../css/t/taf2xz.css';
import '../../css/z/zmr21h.css';
import '../../css/a/ainywl.css';
import '../../css/d/dizlzg.css';
import '../../css/l/ll8taz.css';
import '../../css/m/mdiuwa.css';
import '../../css/d/deodqn.css';
import '../../css/n/nvw5hd.css';
import '../../css/l/lejxcg.css';
import '../../css/l/lsejuv.css';
import '../../css/y/ydovum.css';
import '../../css/m/mr6-qm.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGIopoceRX"><path class="k4vf-t r1menc zxndow"/><path class="kivj7d r1menc taf2xz zxndow"/><path class="r1menc taf2xz zmr21h zxndow"/><path class="ainywl dizlzg r1menc"/><path class="ll8taz r1menc taf2xz zxndow"/><path class="ainywl mdiuwa r1menc"/><path class="deodqn r1menc taf2xz zxndow"/><path class="nvw5hd r1menc taf2xz zxndow"/><circle class="lejxcg"/></mask></defs><path mask="url(#SVGIopoceRX)" class="lsejuv ydovum"/><circle class="mr6-qm ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:iconify2-static-twotone"} {...others} />);
}

export default Component;
