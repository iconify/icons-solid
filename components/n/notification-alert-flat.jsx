import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/io4ioibvl.css';
import '../../css/j/jo6nsp46f.css';
import '../../css/i/i9f7wybal.css';
import '../../css/k/kwjxvk0zc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="io4ioibvl"/><path class="jo6nsp46f"/><path clip-rule="evenodd" class="i9f7wybal"/><path clip-rule="evenodd" class="kwjxvk0zc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:notification-alert-flat"} {...others} />);
}

export default Component;
