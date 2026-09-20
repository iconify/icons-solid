import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s678-kb5e.css';
import '../../css/i/iuxeg3bhp.css';
import '../../css/m/moi355b5x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="s678-kb5e"/><path class="iuxeg3bhp"/><path class="moi355b5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:eye-optic-flat"} {...others} />);
}

export default Component;
