import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mun8fsbpp.css';
import '../../css/v/viyqjgb6i.css';
import '../../css/j/jmqw0bbbk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="mun8fsbpp"/><path clip-rule="evenodd" class="viyqjgb6i"/><path clip-rule="evenodd" class="jmqw0bbbk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:safe-vault-flat"} {...others} />);
}

export default Component;
