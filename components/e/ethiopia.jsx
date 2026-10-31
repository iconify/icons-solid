import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wlrg-ccru.css';
import '../../css/d/djre4o4iv.css';
import '../../css/p/p1z8co0pr.css';
import '../../css/i/iudpd7ufr.css';
import '../../css/a/ai8wz9_bc.css';
import '../../css/q/qtvusubhu.css';
import '../../css/s/sm16tf5el.css';
import '../../css/c/cjybpbczj.css';
import '../../css/a/ag3e6bbpl.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="wlrg-ccru"/><path class="djre4o4iv"/><path class="p1z8co0pr"/><path class="iudpd7ufr"/><path class="ai8wz9_bc"/><path class="qtvusubhu"/><path class="sm16tf5el"/><path class="cjybpbczj"/><path class="ag3e6bbpl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:ethiopia"} {...others} />);
}

export default Component;
