import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oniaw-bgi.css';
import '../../css/p/pva-szciw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="oniaw-bgi"/><path clip-rule="evenodd" class="pva-szciw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:devices-hard-drive"} {...others} />);
}

export default Component;
