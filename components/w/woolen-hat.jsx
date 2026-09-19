import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/mw0vcbb6f.css';
import '../../css/r/r55hgqb1c.css';
import '../../css/r/r8r7mgbbj.css';
import '../../css/p/peqvy84ye.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="mw0vcbb6f"/><path class="r55hgqb1c"/><circle class="r8r7mgbbj"/><path class="peqvy84ye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:woolen-hat"} {...others} />);
}

export default Component;
