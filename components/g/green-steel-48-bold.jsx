import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hs1xeldxk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hs1xeldxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:green-steel-48-bold"} {...others} />);
}

export default Component;
