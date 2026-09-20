import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xla9aybyc.css';
import '../../css/n/nrpxqbcui.css';
import '../../css/r/reqcfj51u.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="xla9aybyc"/><path class="nrpxqbcui"/><path class="reqcfj51u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:fork-knife"} {...others} />);
}

export default Component;
