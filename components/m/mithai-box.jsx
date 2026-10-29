import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vrs5djvyf.css';
import '../../css/c/c253c9zdi.css';
import '../../css/r/r1cdphbyz.css';
import '../../css/z/z44yhvb-g.css';
import '../../css/w/wuc56fb3s.css';
import '../../css/b/b_irsu6nr.css';
import '../../css/h/hvukl5bel.css';
import '../../css/p/pvm4qabbe.css';
import '../../css/b/biut6nbly.css';
import '../../css/u/uz3witb2t.css';
import '../../css/r/r54hnlblx.css';
import '../../css/v/vjbdotbtg.css';
import '../../css/b/brh4kabhh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vrs5djvyf wm-shadow"/><path class="c253c9zdi wm-k"/><path class="r1cdphbyz wm-k"/><path class="wm-k z44yhvb-g"/><path class="wm-k wuc56fb3s"/><path class="b_irsu6nr wm-k"/><path class="hvukl5bel wm-shine"/><path class="pvm4qabbe wm-a"/><path class="biut6nbly wm-a"/><path class="uz3witb2t wm-a"/><path class="r54hnlblx wm-a"/><path class="vjbdotbtg wm-a"/><path class="brh4kabhh wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:mithai-box"} {...others} />);
}

export default Component;
