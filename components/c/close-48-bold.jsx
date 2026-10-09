import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glxb9obxa.css';
import '../../css/r/rbj7ts9zy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="glxb9obxa"/><path class="rbj7ts9zy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:close-48-bold"} {...others} />);
}

export default Component;
