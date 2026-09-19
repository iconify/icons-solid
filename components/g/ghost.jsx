import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dy6_9_bea.css';
import '../../css/p/pmwtv-rax.css';
import '../../css/x/xai6gubor.css';
import '../../css/y/yosw-cc2e.css';
import '../../css/d/dbgippb-x.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="dy6_9_bea"/><path class="pmwtv-rax"/><path class="xai6gubor"/><path class="yosw-cc2e"/><path class="dbgippb-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:ghost"} {...others} />);
}

export default Component;
