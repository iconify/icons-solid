import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwezt-ini.css';
import '../../css/k/k0vfem02x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fwezt-ini"/><path class="k0vfem02x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:reply-to-message-typing-solid"} {...others} />);
}

export default Component;
