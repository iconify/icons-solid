import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/awj6czbpu.css';
import '../../css/x/x0cwhohjj.css';
import '../../css/t/tnc6q-btc.css';
import '../../css/u/urzu6xb9n.css';
import '../../css/r/rt0-0ccbn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="awj6czbpu"/><path class="x0cwhohjj"/><path clip-rule="evenodd" class="tnc6q-btc"/><path clip-rule="evenodd" class="urzu6xb9n"/><path clip-rule="evenodd" class="rt0-0ccbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:browser"} {...others} />);
}

export default Component;
