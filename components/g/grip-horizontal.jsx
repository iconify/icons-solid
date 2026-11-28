import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/es14t5b2u.css';
import '../../css/g/g6pcaib9i.css';
import '../../css/e/ecqwlrb6c.css';
import '../../css/b/bif5e6m5l.css';
import '../../css/f/f1ktb6bsu.css';
import '../../css/j/j58ewhtqf.css';
import '../../css/o/om1m4ygdy.css';
import '../../css/o/o-hkzbcrn.css';
import '../../css/k/k8_irh73j.css';
import '../../css/m/m-2nx9b0y.css';
import '../../css/y/y9seu5btc.css';
import '../../css/c/cio01iq0r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="es14t5b2u"/><path class="g6pcaib9i"/><path class="ecqwlrb6c"/><path class="bif5e6m5l"/><path class="f1ktb6bsu"/><path class="j58ewhtqf"/><path class="om1m4ygdy"/><path class="o-hkzbcrn"/><path class="k8_irh73j"/><path class="m-2nx9b0y"/><path class="y9seu5btc"/><path class="cio01iq0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:grip-horizontal"} {...others} />);
}

export default Component;
