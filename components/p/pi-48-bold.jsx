import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zg50c1boz.css';
import '../../css/w/wu5hif90s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zg50c1boz"/><path class="wu5hif90s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pi-48-bold"} {...others} />);
}

export default Component;
