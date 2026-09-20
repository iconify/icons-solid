import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kx7fe6h-v.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="kx7fe6h-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:user-pin-remix"} {...others} />);
}

export default Component;
