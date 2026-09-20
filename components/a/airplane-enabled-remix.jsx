import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-83k3ici.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="i-83k3ici"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:airplane-enabled-remix"} {...others} />);
}

export default Component;
