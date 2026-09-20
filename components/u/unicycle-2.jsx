import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/m/mz7wbob-a.css';
import '../../css/y/y-n6nwbvv.css';
import '../../css/h/h0t53wb3m.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="mz7wbob-a"/><path class="y-n6nwbvv"/><path class="h0t53wb3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:unicycle-2"} {...others} />);
}

export default Component;
