import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/whjhgpb0b.css';
import '../../css/z/zusm05f6k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="whjhgpb0b"/><path class="zusm05f6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fuel-cell-48-bold"} {...others} />);
}

export default Component;
