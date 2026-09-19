import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivpgmwkfe.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="ivpgmwkfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:gluten-free-outline"} {...others} />);
}

export default Component;
