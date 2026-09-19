import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a371co23j.css';
import '../../css/t/t8rmpkbke.css';
import '../../css/m/mj_ulobib.css';
import '../../css/e/e2kroochg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a371co23j"/><path class="t8rmpkbke"/><path class="mj_ulobib"/><path class="e2kroochg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:opticaldisc"} {...others} />);
}

export default Component;
