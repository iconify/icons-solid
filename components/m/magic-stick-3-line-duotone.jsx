import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/e/e6lmoxbxr.css';
import '../../css/t/tnqrs3bck.css';
import '../../css/x/xerbjnbev.css';
import '../../css/f/fr4skcb1d.css';
import '../../css/o/omy09pzyk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="e6lmoxbxr"/><path class="tnqrs3bck"/><path class="xerbjnbev"/><path class="fr4skcb1d"/><path class="omy09pzyk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magic-stick-3-line-duotone"} {...others} />);
}

export default Component;
