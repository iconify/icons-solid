import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tl630ob_w.css';
import '../../css/x/xgn-kpbzm.css';
import '../../css/w/we99ml1ux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="tl630ob_w"/><path class="xgn-kpbzm"/><path class="we99ml1ux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:missed-call"} {...others} />);
}

export default Component;
