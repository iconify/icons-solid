import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qh-4570hk.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="qh-4570hk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:drop-down-menu-remix"} {...others} />);
}

export default Component;
