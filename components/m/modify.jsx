import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bi97eibdl.css';
import '../../css/m/m9k3o5a-y.css';
import '../../css/t/tbfjszvql.css';
import '../../css/u/uirerzbao.css';
import '../../css/f/fiypqkbhz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="bi97eibdl"/><rect transform="rotate(45 34.606 4.908)" class="m9k3o5a-y"/><circle class="tbfjszvql"/><circle class="uirerzbao"/><circle class="fiypqkbhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:modify"} {...others} />);
}

export default Component;
