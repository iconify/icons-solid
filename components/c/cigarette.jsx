import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lcrpzobws.css';
import '../../css/c/cbmz8qmup.css';
import '../../css/a/akf7n7bim.css';
import '../../css/t/ts-34po2c.css';
import '../../css/b/btynwmbls.css';
import '../../css/e/e_gtapdjt.css';
import '../../css/l/lgdms8eet.css';
import '../../css/z/zde00qb8g.css';
import '../../css/f/f6x2tlwsi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="lcrpzobws"/><path class="cbmz8qmup"/><path class="akf7n7bim"/><path class="ts-34po2c"/><path class="btynwmbls"/><path class="e_gtapdjt"/><path class="lgdms8eet"/><path class="zde00qb8g"/><path class="f6x2tlwsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:cigarette"} {...others} />);
}

export default Component;
