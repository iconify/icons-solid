import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8flcdbca.css';
import '../../css/x/x6ze0wblj.css';
import '../../css/l/lkhgg11it.css';
import '../../css/n/nl6wvub4t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="k8flcdbca"/><path class="x6ze0wblj"/><path class="lkhgg11it"/><path class="nl6wvub4t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:ladybug-duo"} {...others} />);
}

export default Component;
