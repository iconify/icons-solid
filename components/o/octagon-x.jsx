import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z5a4ghrom.css';
import '../../css/p/pqtp8zbrw.css';
import '../../css/p/pkj577m_h.css';
import '../../css/u/uld8ezbyd.css';
import '../../css/d/d9_zxltkw.css';
import '../../css/n/nyczm8bno.css';
import '../../css/v/v__t56bdl.css';
import '../../css/q/qe3149bvl.css';
import '../../css/b/b4ykrudpr.css';
import '../../css/b/b4qeo-j3c.css';
import '../../css/j/jknslybnc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow z5a4ghrom"/><path class="pqtp8zbrw wm-shadow"/><path class="pkj577m_h"/><path class="uld8ezbyd"/><path class="d9_zxltkw"/><path class="nyczm8bno"/><path class="v__t56bdl wm-shine"/><path class="qe3149bvl wm-shine"/><path class="b4ykrudpr"/><path class="b4qeo-j3c"/><path class="jknslybnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:octagon-x"} {...others} />);
}

export default Component;
