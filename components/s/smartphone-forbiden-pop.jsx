import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co62ijjon.css';
import '../../css/t/t8e702bgi.css';
import '../../css/g/ggk_oivnm.css';
import '../../css/y/y18py1z7t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="co62ijjon"/><path class="t8e702bgi"/><path class="ggk_oivnm"/><path class="y18py1z7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:smartphone-forbiden-pop"} {...others} />);
}

export default Component;
