import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/itpgybcop.css';
import '../../css/a/abefoqdzl.css';
import '../../css/w/wrra6e5ej.css';
import '../../css/a/ag9cgdb8l.css';
import '../../css/f/f1ye09bns.css';
import '../../css/s/ss6a1j1wa.css';
import '../../css/j/jz9jlvbqd.css';
import '../../css/y/y6o_wop9g.css';
import '../../css/p/pgi-ayb8p.css';
import '../../css/e/eynqi8shs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="itpgybcop"/><path class="abefoqdzl"/><path class="wrra6e5ej"/><path class="ag9cgdb8l"/><path class="f1ye09bns"/><path class="ss6a1j1wa"/><path class="jz9jlvbqd"/><path class="y6o_wop9g"/><path class="pgi-ayb8p"/><path class="eynqi8shs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:lighter"} {...others} />);
}

export default Component;
