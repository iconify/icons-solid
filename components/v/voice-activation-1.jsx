import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2sqb8kvn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n2sqb8kvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:voice-activation-1"} {...others} />);
}

export default Component;
