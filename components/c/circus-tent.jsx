import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/w/w7idbquyh.css';
import '../../css/g/gd_48ac5o.css';
import '../../css/e/e16pvxbca.css';
import '../../css/p/pe8bgdbwr.css';
import '../../css/j/jr2ek6bel.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="w7idbquyh"/><path class="gd_48ac5o"/><path class="e16pvxbca"/><path class="pe8bgdbwr"/><path class="jr2ek6bel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:circus-tent"} {...others} />);
}

export default Component;
