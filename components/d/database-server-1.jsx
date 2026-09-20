import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zv70vhl3c.css';
import '../../css/n/nrpqu--cl.css';
import '../../css/s/s38sxvbud.css';
import '../../css/a/a84o4acnq.css';
import '../../css/c/ctu_0kb-f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="zv70vhl3c"/><path class="nrpqu--cl"/><path class="s38sxvbud"/><path class="a84o4acnq"/><path class="ctu_0kb-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:database-server-1"} {...others} />);
}

export default Component;
