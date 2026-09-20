import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/clqqdh5xt.css';
import '../../css/h/hd_bo92hn.css';
import '../../css/a/a8jhbuhnd.css';
import '../../css/l/lia-gobfx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="clqqdh5xt"/><path class="hd_bo92hn"/><path class="a8jhbuhnd"/><path class="lia-gobfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:sunset-flat"} {...others} />);
}

export default Component;
