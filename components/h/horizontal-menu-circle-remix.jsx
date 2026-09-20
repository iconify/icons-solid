import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njf8bp8mn.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="njf8bp8mn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:horizontal-menu-circle-remix"} {...others} />);
}

export default Component;
