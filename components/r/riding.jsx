import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/b/bueyivd2g.css';
import '../../css/x/xcl2xpzvj.css';
import '../../css/s/ss_1d09nn.css';
import '../../css/q/q8ka45beo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="bueyivd2g"/><path class="xcl2xpzvj"/><circle class="ss_1d09nn"/><circle class="q8ka45beo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:riding"} {...others} />);
}

export default Component;
