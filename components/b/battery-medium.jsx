import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/c/c-v3gs91n.css';
import '../../css/d/d8wj6s5rj.css';
import '../../css/y/yfr-e9b3c.css';
import '../../css/o/oxe5l2b-y.css';
import '../../css/o/ohthy0-xr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="c-v3gs91n"/><path class="d8wj6s5rj"/><path class="yfr-e9b3c"/><path class="oxe5l2b-y"/><path class="ohthy0-xr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:battery-medium"} {...others} />);
}

export default Component;
