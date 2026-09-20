import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/b4fnhb_7a.css';
import '../../css/l/l8rgqtb5j.css';
import '../../css/q/qxn9uebzv.css';
import '../../css/c/clqt9njub.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="b4fnhb_7a"/><path class="l8rgqtb5j"/><path class="qxn9uebzv"/><path class="clqt9njub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:button-power-1"} {...others} />);
}

export default Component;
