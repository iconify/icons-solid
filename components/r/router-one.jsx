import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oysro1bow.css';
import '../../css/w/ww76s-0tl.css';
import '../../css/k/kwrhynbxg.css';
import '../../css/s/s5pl_zxat.css';
import '../../css/q/q4ff1gb4m.css';
import '../../css/x/xto1tul2y.css';
import '../../css/d/dyiok_b8s.css';
import '../../css/g/g85u0fbgh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="oysro1bow"/><path clip-rule="evenodd" class="ww76s-0tl"/><path class="kwrhynbxg"/><path clip-rule="evenodd" class="s5pl_zxat"/><path class="q4ff1gb4m"/><path clip-rule="evenodd" class="xto1tul2y"/><path class="dyiok_b8s"/><path class="g85u0fbgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:router-one"} {...others} />);
}

export default Component;
