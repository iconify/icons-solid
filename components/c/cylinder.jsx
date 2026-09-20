import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/b/bwk5rwbue.css';
import '../../css/o/okqtn8bwz.css';
import '../../css/z/zcrd39aiv.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="bwk5rwbue"/><path class="okqtn8bwz"/><path class="zcrd39aiv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:cylinder"} {...others} />);
}

export default Component;
