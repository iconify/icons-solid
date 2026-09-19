import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jgjxk0u1q.css';
import '../../css/h/hw4iexbpi.css';
import '../../css/a/auqkg35_k.css';
import '../../css/x/xdn4qlb1g.css';
import '../../css/t/tghi_kbxe.css';
import '../../css/p/pv7jgtbmr.css';

const viewBox = {"width":100,"height":100};
const content = `<circle class="jgjxk0u1q"/><circle class="hw4iexbpi"/><circle class="auqkg35_k"/><circle class="xdn4qlb1g"/><circle class="tghi_kbxe"/><path class="pv7jgtbmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"geo:turf-square-grid"} {...others} />);
}

export default Component;
